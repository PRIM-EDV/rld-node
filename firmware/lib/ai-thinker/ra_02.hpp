#ifndef RA_02_HPP
#define RA_02_HPP

#include "sx127x.hpp"

namespace modm
{

template <typename SpiMaster, typename Cs>
class Ra02 : public SX127x<SpiMaster, Cs>, public sx127x, NestedResumable<6>
{
public:
	Ra02();

	ResumableResult<void>
	initialize(frequency_t freq, SpreadingFactor sf, SignalBandwidth bw, ErrorCodingRate cr);
};

}

#endif
