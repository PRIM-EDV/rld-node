// ----------------------------------------------------------------------------
/* Copyright (c) 2022, Lucas Mösch
 * All Rights Reserved.
 */
// ----------------------------------------------------------------------------

#include "board.hpp"
#include "network/ra02.hpp"

namespace Board
{

namespace lora1
{
    Ra02<Spi, Nss, D0> modem;
}

namespace lora2
{
    Ra02<Spi, Nss, D0> modem;
}

namespace rpi
{
    modm::IODeviceWrapper<Uart, modm::IOBuffer::DiscardIfFull> rpiIODevice;
	modm::IOStream ioStream(rpiIODevice);
}

}