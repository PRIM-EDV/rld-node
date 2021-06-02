// ----------------------------------------------------------------------------
/* Copyright (c) 2021, Lucas Mösch
 * All Rights Reserved.
 */
// ----------------------------------------------------------------------------

// #ifndef MODM_SX127X_HPP
// #   error "Don't include this file directly, use 'sx1276.hpp' instead!"
// #endif

#include "ra_02.hpp"

namespace modm
{

template <typename SpiMaster, typename Cs>
Ra02<SpiMaster, Cs>::Ra02()
{

}

// ----------------------------------------------------------------------------

template <typename SpiMaster, typename Cs>
ResumableResult<void>
Ra02<SpiMaster, Cs>::initialize(frequency_t freq, SpreadingFactor sf, SignalBandwidth bw, ErrorCodingRate cr)
{
    RF_BEGIN();

    RF_CALL(setLora());
    RF_CALL(setCarrierFreq(freq));
    RF_CALL(setPaBoost());

    RF_CALL(setSpreadingFactor(sf));
    RF_CALL(setBandwidth(bw));
    RF_CALL(setCodingRate(cr));
    RF_CALL(enablePayloadCRC());

    //
	if( (sf == SpreadingFactor::SF_7 && bw < SignalBandwidth::BW_1) ||
		(sf == SpreadingFactor::SF_8 && bw < SignalBandwidth::BW_3)  ||
		(sf == SpreadingFactor::SF_9 && bw < SignalBandwidth::BW_5)  ||
		(sf == SpreadingFactor::SF_10 && bw < SignalBandwidth::BW_7) ||
		(sf == SpreadingFactor::SF_11 && bw < SignalBandwidth::BW_8) ||
		(sf == SpreadingFactor::SF_12 && bw < SignalBandwidth::BW_9)
	  )
	{
		RF_CALL(setLowDataRateOptimize())
	}

    RF_END();
}

}