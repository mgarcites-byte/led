/**
 * Comprovado
 */
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Acebott.setLed(DigitalWritePin.P1, SwitchStatus.OFF)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    Acebott.setLed(DigitalWritePin.P1, SwitchStatus.ON)
})
Acebott.setLed(DigitalWritePin.P1, SwitchStatus.OFF)
