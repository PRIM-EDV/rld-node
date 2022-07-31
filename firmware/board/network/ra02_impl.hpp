// ----------------------------------------------------------------------------
/* Copyright (c) 2022, Lucas Mösch
 * All Rights Reserved.
 */
// ----------------------------------------------------------------------------

#include "ra02.hpp"

template <typename SpiMaster, typename Cs, typename D0>
Ra02<SpiMaster, Cs, D0>::Ra02()
{
}

// ----------------------------------------------------------------------------

template <typename SpiMaster, typename Cs, typename D0>
ResumableResult<void>
Ra02<SpiMaster, Cs, D0>::initialize()
{
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

    // // Set output power to 10 dBm (boost mode)
    RF_CALL(this->setOutputPower(0x0a));

    RF_END();
}

// ----------------------------------------------------------------------------

template <typename SpiMaster, typename Cs, typename D0>
ResumableResult<uint8_t*>
Ra02<SpiMaster, Cs, D0>::getMessage()
{
    RF_BEGIN();

    while(true) {
        RF_WAIT_UNTIL(D0::read());
        RF_CALL(this->read(sx127x::Address::IrqFlags, this->status, 1));
        if(!(status[0] & (uint8_t) sx127x::RegIrqFlags::PayloadCrcError)) {
            RF_CALL(this->getPayload(this->data, 4));
            RF_RETURN(this->data);
        }
    }

    RF_END();
}