// ----------------------------------------------------------------------------
/* Copyright (c) 2021, Lucas Moesch
 * All Rights Reserved.
 */
// ----------------------------------------------------------------------------

#ifndef RLD_NODE_BOARD_HPP
#define RLD_NODE_BOARD_HPP

#include <modm/platform.hpp>
#include <modm/architecture/interface/clock.hpp>

using namespace modm::platform;

namespace Board
{

using namespace modm::literals;

struct SystemClock
{
	// core and bus frequencys
	static constexpr uint32_t Frequency = 48_MHz;
    static constexpr uint32_t Hsi = 8_MHz;
	static constexpr uint32_t Ahb = Frequency;
	static constexpr uint32_t Apb = Frequency;

	// Usart 
	static constexpr uint32_t Usart1 = Apb;
	static constexpr uint32_t Usart2 = Apb;

	// Spi
	static constexpr int Spi2 = Frequency;

	static bool inline
	enable()
	{
		Rcc::enableInternalClock(); // 8 MHz
        const Rcc::PllFactors pllFactors{
			.pllMul = 12,
			.pllPrediv = 2
		};
        Rcc::enablePll(Rcc::PllSource::InternalClock, pllFactors); 
		// set flash latency for 48MHz
		Rcc::setFlashLatency<Frequency>();
		// switch system clock to PLL output
		Rcc::enableSystemClock(Rcc::SystemClockSource::Pll);
		Rcc::setAhbPrescaler(Rcc::AhbPrescaler::Div1);
		Rcc::setApbPrescaler(Rcc::ApbPrescaler::Div1);
		// update frequencies for busy-wait delay functions
        Rcc::updateCoreFrequency<Frequency>();

		return true;
	}
};

namespace lora1 {
	using Rst = GpioOutputA2;
	using D0 = GpioOutputA3;

	using Nss = GpioOutputA4;
	using Sck = GpioOutputA5;
	using Miso = GpioInputA6;
	using Mosi = GpioOutputA7;

	using spi = SpiMaster1;
}

namespace lora2 {
	using Rst = GpioOutputA2;
	using D0 = GpioOutputA3;

	using Nss = GpioOutputB13;
	using Sck = GpioOutputB10;
	using Miso = GpioInputB14;
	using Mosi = GpioOutputB15;

	using spi = SpiMaster2;
}

namespace rpi
{
	using Rx = GpioInputA10;
	using Tx = GpioOutputA9;

	using Uart = Usart1;
}

inline void
initialize()
{
	SystemClock::enable();
	SysTickTimer::initialize<SystemClock>();

	lora1::spi::connect<lora1::Sck, lora1::Miso, lora1::Mosi>();
	lora1::spi::initialize<SystemClock, 1500_kHz>();

	lora2::spi::connect<lora2::Sck, lora2::Miso, lora2::Mosi>();
	lora2::spi::initialize<SystemClock, 1500_kHz>();

	rpi::Uart::connect<rpi::Tx::Tx, rpi::Rx::Rx>();
	rpi::Uart::initialize<SystemClock, 115200_Bd>();
}

}

#endif