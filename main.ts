input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . . . . #
        . # # # .
        `)
    music.play(music.stringPlayable("C D E D C D E D ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . . . . .
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . . . . .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . . . . .
        . # # # .
        `)
    basic.showLeds(`
        . # . . .
        . # . # #
        . . . . .
        . . . . .
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . . . . .
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showString("Vamos ouvir musica?")
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
    basic.showNumber(1)
    music.play(music.stringPlayable("A F E F D G E F ", 120), music.PlaybackMode.UntilDone)
    basic.showNumber(2)
    music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
    basic.showNumber(3)
    music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.UntilDone)
    basic.showNumber(4)
    music.play(music.stringPlayable("B A G A G F A C5 ", 120), music.PlaybackMode.UntilDone)
    basic.showNumber(5)
    music.play(music.stringPlayable("G F G A - F E D ", 120), music.PlaybackMode.UntilDone)
    basic.showNumber(6)
    music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.UntilDone)
    basic.showNumber(7)
    music.play(music.stringPlayable("C5 G B A F A C5 B ", 120), music.PlaybackMode.UntilDone)
    basic.showNumber(8)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    music.play(music.stringPlayable("C D C5 B C5 B C D ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . # . .
        . # . # .
        . # . # .
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showString("Ops")
    basic.showLeds(`
        . . . # .
        # # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    for (let index = 0; index < 30; index++) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    music.play(music.stringPlayable("G B C5 B G B C5 B ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . # .
        # # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # . . .
        . # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
})
basic.showLeds(`
    . . . . .
    . # . # .
    # . # . #
    # . . . #
    # . . . #
    `)
music.play(music.createSoundExpression(WaveShape.Square, 2695, 1158, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . . # . .
    . . . . .
    . . # . .
    . . # . .
    . . # . .
    `)
music.play(music.createSoundExpression(WaveShape.Square, 2695, 1158, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . . # # .
    . # . . .
    . # . . .
    . # . . .
    . . # # .
    `)
music.play(music.createSoundExpression(WaveShape.Square, 2695, 1158, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
basic.showLeds(`
    # # # . .
    # . # . .
    # # # . .
    # . # . .
    # . . # .
    `)
music.play(music.createSoundExpression(WaveShape.Square, 2695, 1158, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . . # . .
    . # . # .
    . # . # .
    . # . # .
    . . # . .
    `)
music.play(music.createSoundExpression(WaveShape.Square, 2695, 1158, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . # # . .
    . # . # .
    . # # . .
    . # . # .
    . # # . .
    `)
music.play(music.createSoundExpression(WaveShape.Square, 2695, 1158, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . . # . .
    . . . . .
    . . # . .
    . . # . .
    . . # . .
    `)
music.play(music.createSoundExpression(WaveShape.Square, 2695, 1158, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . . . . .
    . # # # .
    . . # . .
    . . # . .
    . . # . .
    `)
music.play(music.createSoundExpression(WaveShape.Square, 2695, 1158, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . # # # .
    . # . # .
    . # # # .
    . # . . .
    . # . . .
    `)
music.play(music.createSoundExpression(WaveShape.Square, 2695, 1158, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . # # # .
    . # . . .
    . # # # .
    . # . . .
    . # # # .
    `)
music.play(music.createSoundExpression(WaveShape.Square, 2695, 1158, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . . . . .
    . # # # .
    . . # . .
    . . # . .
    . . # . .
    `)
music.play(music.createSoundExpression(WaveShape.Square, 2695, 1158, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
for (let index = 0; index < 30; index++) {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
}
basic.showLeds(`
    . # . . .
    . # . # #
    . . . . .
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . . . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    . # . # #
    . . . . .
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    # # . # #
    . . . . .
    # . . . #
    . # # # .
    `)
music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
basic.forever(function () {
	
})
