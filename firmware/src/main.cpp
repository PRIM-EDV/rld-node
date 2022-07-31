#include <nanopb/pb_encode.h>
#include <nanopb/pb_decode.h>
#include <modm/processing.hpp>
#include <modm/processing/protothread.hpp>

#include "board/board.hpp"
#include "board/network/ra02.hpp"
#include "protocol/protocol.pb.hpp"


using namespace Board;

class LoraThread : public modm::pt::Protothread, private modm::NestedResumable<2>
{
public:
	uint8_t data[8];

    void
    initialize(){
        RF_CALL_BLOCKING(modem1.initialize());
        RF_CALL_BLOCKING(modem2.initialize());
    }

    bool
    run(){
        PT_BEGIN();

        while (1) {
            PT_WAIT_UNTIL(lora1::D0::read() || lora2::D0::read());

            if(lora1::D0::read())
            {
                PT_CALL(modem1.read(sx127x::Address::IrqFlags, data, 1));

                if(data[0] & (uint8_t) sx127x::RegIrqFlags::PayloadCrcError){
                    //XPCC_LOG_INFO <<  "Irq:" << data[0] <<  xpcc::endl;
                    //PT_CALL(sx1278.getPayload(data, 4))
                }else{
                    PT_CALL(modem1.getPayload(data, 4));
                    rpi::ioStream << data[0] << ":" << data[1]<< ":" << data[2]<< ":" << data[3] << modm::endl;
                    // BLUETOOTH << data[0] << ":" << data[1]<< ":" << data[2]<< ":" << data[3] << xpcc::endl;
                }

                PT_CALL(modem1.write(sx127x::Address::IrqFlags, 0xff));
            }

            if(lora2::D0::read())
            {
                PT_CALL(modem1.read(sx127x::Address::IrqFlags, data, 1));

                if(data[0] & (uint8_t) sx127x::RegIrqFlags::PayloadCrcError){
                    //XPCC_LOG_INFO <<  "Irq:" << data[0] <<  xpcc::endl;
                    //PT_CALL(sx1278.getPayload(data, 4))
                }else{
                    PT_CALL(modem1.getPayload(data, 4));
                    rpi::ioStream << data[0] << ":" << data[1]<< ":" << data[2]<< ":" << data[3] << modm::endl;
                    // BLUETOOTH << data[0] << ":" << data[1]<< ":" << data[2]<< ":" << data[3] << xpcc::endl;
                }

                PT_CALL(modem1.write(sx127x::Address::IrqFlags, 0xff));
            }
        }

        PT_END();
    }
private:
    Ra02<lora1::Spi, lora1::Nss> modem1;
    Ra02<lora2::Spi, lora2::Nss> modem2;

} loraThread;

int main()
{
    Board::initialize();

	loraThread.initialize();


    while (true)
    {
        loraThread.run();

        // rpi::Uart::write(5);
    }
}