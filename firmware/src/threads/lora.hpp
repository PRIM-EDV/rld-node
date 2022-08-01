/*
 * Copyright (c) 2022, Lucas Mösch
 * All Rights Reserved.
 */
// ----------------------------------------------------------------------------

#ifndef LORA_THREAD_HPP
#define LORA_THREAD_HPP

#include <modm/processing.hpp>
#include <modm/processing/protothread.hpp>

#include "board/board.hpp"
#include "board/network/ra02.hpp"
#include "lib/cobs/cobs.hpp"
#include "protocol/protocol.pb.hpp"

// typedef  modm::IOStream rpi_ostream_t;

template <typename SpiMaster, typename Cs, typename D0>
class LoraThread : public modm::pt::Protothread, private modm::NestedResumable<2>
{
public:
    void
    initialize()
    {
        RF_CALL_BLOCKING(modem.initialize());
    };

    bool
    run() 
    {
        PT_BEGIN();

        while (1) {
            if(PT_CALL(modem.getMessage(this->data)))
            {
                this->setRldInfo(this->data);
            };
        };

        PT_END();
    };

    void
    setRldInfo(uint8_t* data)
    {
        // generate protobuf message
        RldInfo rld_info = RldInfo_init_zero;
        rld_info.id = data[0];
        rld_info.flags = data[1] >> 4;
        rld_info.px = ((data[1] & 0x0f) << 6) | ((data[2] & 0xfc) >> 2);
        rld_info.py = ((data[2] & 0x03) << 8) | data[3];

        RldMessage rld_message = RldMessage_init_zero;
        rld_message.id = message_id++;
        rld_message.message.request.request.set_rld_info.info = rld_info;

        pb_encode(&pb_ostream, RldMessage_fields, &rld_message);
        cobs_encode(message_bufer, pb_ostream.bytes_written, encoding_buffer);

        for(uint8_t i = 0; i <= pb_ostream.bytes_written; i++) {
            Board::rpi::ioStream.write(encoding_buffer[i]);
        }
        Board::rpi::ioStream.write('\0');
    };

private:
	uint8_t data[8];
    uint8_t message_id = 0;
    uint8_t message_bufer[128];
    uint8_t encoding_buffer[128];

    pb_ostream_t pb_ostream = pb_ostream_from_buffer(message_bufer, sizeof(message_bufer));

    Ra02<SpiMaster, Cs, D0> modem;
};

#endif