/* Copyright (c) 2022, Lucas Mösch
 * All Rights Reserved.
 */
// ----------------------------------------------------------------------------

#ifndef COBS_HPP
#define COBS_HPP

namespace cobs
{
    inline uint8_t encode(uint8_t *data, uint8_t nbBytes, uint8_t *buffer)
    {
        uint8_t *codep = buffer++; // Output code pointer
        uint8_t dist = 1; // Code value

        for (;nbBytes--; ++data)
        {
            (*data) ? *buffer++ = *data, ++dist : *codep = dist, dist = 1, codep = buffer, ++buffer;
        }
        *codep = dist;

        return nbBytes + 1;
    }

    inline uint8_t decode()
    {
        return 0;
    }
}

#endif