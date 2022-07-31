#include <modm/processing.hpp>
#include <modm/processing/protothread.hpp>

#include "board/board.hpp"
#include "board/network/ra02.hpp"
// #include "lib/ai-thinker/ra_02.hpp"
// #include "nanopb/pb_decode.h"
// #include "nanopb/pb_encode.h"
// #include "nanopb/protocol/protocol.pb.h"

using namespace Board;

class LoraThread : public modm::pt::Protothread, private modm::NestedResumable<2>
{
public:
    void
    initialize(){
        RF_CALL_BLOCKING(lora1.initialize());
        RF_CALL_BLOCKING(lora2.initialize());
    }

    bool
    run(){
        PT_BEGIN();

        while (1) {

        }

        PT_END();
    }
private:
    Ra02<lora1::Spi, lora1::Nss> lora1;
    Ra02<lora2::Spi, lora2::Nss> lora2;

	// void
	// buildPacket(){
	// 	uint16_t px;
	// 	uint16_t py;

	// 	//XPCC_LOG_INFO << px << ":" << py << xpcc::endl;

	// 	// data[0] = TRACKERID;
	// 	// data[1] = (px >> 6) & 0x0F;
	// 	// data[2] = (px << 2) | ((py >>8) & 0x03);
	// 	// data[3] = (py) & 0xFF;
	// };
} loraThread;

int main()
{
    Board::initialize();

	loraThread.initialize();


    while (true)
    {
        // loraThread.run();

        // rpi::Uart::write(5);
    }
}