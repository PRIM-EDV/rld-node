// ----------------------------------------------------------------------------
/* Copyright (c) 2022, Lucas Moesch
 * All Rights Reserved.
 */
// ----------------------------------------------------------------------------
#ifndef RA_02_HPP
#define RA_02_HPP

#include "driver/ai-thinker/sx127x.hpp"

using namespace modm;

template <typename SpiMaster, typename Cs, typename D0>
class Ra02 : public SX127x<SpiMaster, Cs>
{

public:
	uint8_t data[8];

	Ra02();

    ResumableResult<void>
	initialize();

	ResumableResult<uint8_t*>
	getMessage();

private:
	uint8_t status[1];
};

#include "ra02_impl.hpp"

#endif
