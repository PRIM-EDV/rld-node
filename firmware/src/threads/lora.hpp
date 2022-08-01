/*
 * Copyright (c) 2022, Lucas Mösch
 * All Rights Reserved.
 */
// ----------------------------------------------------------------------------

#ifndef LORA_THREAD_HPP
#define LORA_THREAD_HPP

#include <modm/processing.hpp>
#include <modm/processing/protothread.hpp>

#include "board/network/ra02.hpp"

template <typename SpiMaster, typename Cs, typename D0>
class LoraThread : public modm::pt::Protothread, private modm::NestedResumable<2>
{
public:
	uint8_t data[8];

    void
    initialize();

    bool
    run();

    void
    setRldInfo();

private:
    Ra02<SpiMaster, Cs, D0> modem;

};

#include "lora_impl.hpp"

#endif