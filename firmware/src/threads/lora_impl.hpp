/*
 * Copyright (c) 2022, Lucas Mösch
 * All Rights Reserved.
 */
// ----------------------------------------------------------------------------

#include "lora.hpp"

template <typename SpiMaster, typename Cs, typename D0>
void
LoraThread<SpiMaster, Cs, D0>::initialize(){
    RF_CALL_BLOCKING(modem.initialize());
}

template <typename SpiMaster, typename Cs, typename D0>
bool
LoraThread<SpiMaster, Cs, D0>::run(){
    PT_BEGIN();

    while (1) {
        uint8_t nbBytes = PT_CALL(modem.getMessage(this->data));
    }

    PT_END();
}
