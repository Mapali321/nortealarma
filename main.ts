basic.forever(function () {
    if (input.compassHeading() >= 0 && input.compassHeading() <= 45 || input.compassHeading() >= 315 && input.compassHeading() <= 359) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
        music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    } else if (input.compassHeading() >= 46 && input.compassHeading() <= 135) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . . .
            . # # # .
            `)
        music.play(music.createSoundExpression(
        WaveShape.Noise,
        500,
        499,
        255,
        0,
        750,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
    } else if (input.compassHeading() >= 136 && input.compassHeading() <= 225) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
        music.play(music.createSoundExpression(WaveShape.Square, 500, 500, 255, 0, 50, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    } else if (input.compassHeading() >= 226 && input.compassHeading() <= 314) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # . # .
            . # # # .
            `)
        music.play(music.createSoundExpression(
        WaveShape.Noise,
        54,
        54,
        255,
        0,
        500,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
    } else {
    	
    }
})
