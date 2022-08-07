#include <nanopb/pb_encode.h>
#include <nanopb/pb_decode.h>
#include <modm/processing.hpp>
#include <modm/processing/protothread.hpp>

#include "board/board.hpp"
#include "lib/cobs/cobs.hpp"
// #include "lib/uuid/uuid.h"
#include "protocol/protocol.pb.hpp"
#include "src/threads/lora.hpp"

using namespace Board;

namespace Board::lora1{
    LoraThread<Spi, Nss, D0> thread;
}

namespace Board::lora2{
    LoraThread<Spi, Nss, D0> thread;
}

int main()
{
    Board::initialize();

    lora1::thread.initialize();
    lora2::thread.initialize();

    while (true)
    {
        lora1::thread.run();
        lora2::thread.run();
    }
}