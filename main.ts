input.onLogoEvent(TouchButtonEvent.Released, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Acebott.setLed(DigitalWritePin.P1, SwitchStatus.OFF)
})
input.onButtonPressed(Button.A, function () {
    Acebott.setLed(DigitalWritePin.P1, SwitchStatus.ON)
})
Acebott.setLed(DigitalWritePin.P1, SwitchStatus.OFF)
