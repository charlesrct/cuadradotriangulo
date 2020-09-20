function paso6 () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . # #
        . . # # #
        `)
    dem200()
}
function paso5 () {
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # #
        . . # . #
        . # # # #
        `)
    dem200()
}
function paso1 () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    dem200()
}
function paso2 () {
    basic.showLeds(`
        . . # # #
        . # . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    dem200()
}
function dem200 () {
    basic.pause(200)
}
function paso4 () {
    basic.showLeds(`
        . . . . #
        . . . # #
        . . # . #
        . # . . #
        # # # # #
        `)
    dem200()
}
function paso3 () {
    basic.showLeds(`
        . . . # #
        . . # . #
        . # . . #
        # . . . #
        # # # # #
        `)
    dem200()
}
basic.forever(function () {
    paso1()
    paso2()
    paso3()
    paso4()
    paso5()
    paso6()
    basic.clearScreen()
    dem200()
    basic.pause(1000)
})
