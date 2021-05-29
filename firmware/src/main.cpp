#include <modm/platform.hpp>

using namespace modm::platform;
using namespace std::chrono_literals;

int main()
{
    GpioA0::setOutput();
    while (true)
    {
        GpioA0::toggle();
    }
}