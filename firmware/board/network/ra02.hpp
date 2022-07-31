// ----------------------------------------------------------------------------
/* Copyright (c) 2022, Lucas Moesch
 * All Rights Reserved.
 */
// ----------------------------------------------------------------------------

#include "driver/sx127x.hpp"

template <typename SpiMaster, typename Cs>
class Ra02 : public SX127x<SpiMaster, Cs>
{
public:
	Ra02() {};

    ResumableResult<void>
	initialize() {
        RF_BEGIN();

        RF_CALL(this->setLora());
        RF_CALL(this->setCarrierFreq(0x6f, 0x00, 0x12));
        RF_CALL(this->setPaBoost());
		RF_CALL(this->setAgcAutoOn());

        RF_CALL(this->setExplicitHeaderMode());
		RF_CALL(this->setSpreadingFactor(sx127x::SpreadingFactor::SF10));
		RF_CALL(this->setBandwidth(sx127x::SignalBandwidth::Fr125kHz));
		RF_CALL(this->setCodingRate(sx127x::ErrorCodingRate::Cr4_5));
        RF_CALL(this->enablePayloadCRC());
		RF_CALL(this->setDio0Mapping(0));

		RF_CALL(this->setPayloadLength(4));

		// Set output power to 10 dBm (boost mode)
		RF_CALL(this->setOutputPower(0x0a));

        RF_END();
    };
};

