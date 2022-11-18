basic.forever(function () {
    basic.showArrow(Math.abs(0))
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . . # . .
        . . . . .
        `)
})
basic.forever(function () {
    radio.setTransmitSerialNumber(false)
    radio.sendNumber(pins.analogReadPin(AnalogPin.P5))
})
