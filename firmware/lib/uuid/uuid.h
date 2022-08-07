/* Copyright (c) 2022, Lucas Mösch
 * All Rights Reserved.
 */
// ----------------------------------------------------------------------------

#ifndef UUID_HPP
#define UUID_HPP

#include <stdint.h>
#include <stdio.h>
#include "lib/random/random.hpp"

namespace uuid {

    namespace
    {
        union RandomBytes {
            uint64_t source[2];
            uint8_t bytes[16];
        };
    }

    inline void v4(char* buffer)
    {
        RandomBytes rand = {random::lfsr64(), random::lfsr64()};

        rand.bytes[6] = (rand.bytes[6] & 0x0F) | 0x40;
        rand.bytes[8] = (rand.bytes[8] & 0x3F) | 0x80;

        sprintf(buffer, "%02x%02x%02x%02x-%02x%02x-%02x%02x-%02x%02x-%02x%02x%02x%02x%02x%02x",
            rand.bytes[0],  rand.bytes[1],  rand.bytes[2], rand.bytes[3],
            rand.bytes[4],  rand.bytes[5],  rand.bytes[6], rand.bytes[7],
            rand.bytes[8],  rand.bytes[9],  rand.bytes[10], rand.bytes[11],
            rand.bytes[12], rand.bytes[13], rand.bytes[14], rand.bytes[15]
        );
    }
}

#endif