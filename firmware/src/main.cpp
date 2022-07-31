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
        RF_CALL_BLOCKING(lora1::modem.initialize());
        RF_CALL_BLOCKING(lora2::modem.initialize());
    }

    bool
    run(){
        PT_BEGIN();

        while (1) {
            PT_CALL(lora1::modem.getMessage());
            PT_CALL(lora2::modem.getMessage());
        }

        PT_END();
    }
} loraThread;

int main()
{
    Board::initialize();
	loraThread.initialize();

    while (true)
    {
        loraThread.run();
    }
}