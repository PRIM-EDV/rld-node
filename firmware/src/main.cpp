#include <nanopb/pb_encode.h>
#include <nanopb/pb_decode.h>
#include <modm/processing.hpp>
#include <modm/processing/protothread.hpp>

#include "board/board.hpp"
#include "board/network/ra02.hpp"
#include "lib/cobs/cobs.hpp"
#include "protocol/protocol.pb.hpp"

#include "src/threads/lora.hpp"

using namespace Board;

int main()
{
    Board::initialize();

    LoraThread<lora1::Spi, lora1::Nss, lora1::D0> loraThread1;
    LoraThread<lora2::Spi, lora2::Nss, lora2::D0> loraThread2;

    loraThread1.initialize();
    loraThread2.initialize();

    while (true)
    {
        loraThread1.run();
        loraThread2.run();
    }
}