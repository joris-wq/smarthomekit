input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
    game.setScore(0)
    game.startCountdown(6000)
    if (game.isGameOver()) {
        basic.showNumber(game.score())
    }
})
input.onButtonPressed(Button.B, function () {
    game.addScore(1)
})
basic.showString("PRESS A TO START")
