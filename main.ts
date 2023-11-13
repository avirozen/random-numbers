input.onGesture(Gesture.Shake, function () {
    index += 1
    basic.clearScreen()
    led.toggle(2, 2)
    basic.pause(500)
    led.toggle(2, 2)
    a = randint(1, 6)
    basic.showNumber(a)
})
let index = 0
let a = 0
a = 0
basic.showNumber(a)
