basic.forever(function () {
    basic.showNumber(input.temperature())
    basic.showLeds(`
        # . # # #
        . . # . .
        . . # . .
        . . # . .
        . . # # #
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
