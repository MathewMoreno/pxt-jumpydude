namespace SpriteKind {
    export const Trampoline = SpriteKind.create()
}
// When the player touches the trampoline
sprites.onOverlap(SpriteKind.Player, SpriteKind.Trampoline, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Jared.vy = -110
    Trampo.x += Math.randomRange(-50, 50)
    Trampo.y += -75
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.slash)
})
// When is the timer is done.
info.onCountdownEnd(function () {
    game.over(true, effects.confetti)
})
let Trampo: Sprite = null
let Jared: Sprite = null
Jared = sprites.create(img`
    . . . . . . . . . . . . e e e e
    . . . . . . . . . e e e e e e e
    . . . . . . e e e e e e e e e e
    . . . e e e e e e e e e e e e .
    . . . e e e e e e e 4 4 4 4 . .
    . . . e e e e 4 4 4 4 4 4 4 . .
    . . . 4 4 4 4 4 4 4 f f 4 4 . .
    . . . 4 4 4 4 4 4 4 f f 4 4 . .
    . . . 4 4 4 4 4 4 4 4 4 4 4 . .
    . . . 4 4 4 4 4 4 4 f 4 4 4 . .
    . . . 4 4 4 4 4 4 4 4 f f f . .
    . . . 8 8 4 4 4 4 4 4 4 4 4 . .
    . . . 8 8 8 8 8 8 8 8 8 8 8 8 .
    . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    . 8 8 8 8 2 8 8 2 8 8 8 2 8 8 8
    . 8 8 8 8 2 8 8 2 8 8 8 2 8 8 8
`, SpriteKind.Player)
scene.cameraFollowSprite(Jared)
Jared.ay = 55
Trampo = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . a a b b b b b b b b a a . .
    . . a a 1 f 1 f 1 f 1 f a a . .
    . . a a f 1 f 1 f 1 f 1 a a . .
    . . a a b b b b b b b b a a . .
    . . a a . . . . . . . . a a . .
    . . a a . . . . . . . . a a . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Trampoline)
Jared.setPosition(300, 450)
Trampo.setPosition(300, 520)
let EvilDude = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . 2 . . . . . . . . 2 . . .
    . . . 2 2 . . . . . . 2 2 . . .
    . . . 2 2 2 . . . . 2 2 2 . . .
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
    . . 2 f f f 2 2 f f f f 2 2 . .
    . 2 2 2 f 2 2 2 2 f 2 2 2 2 2 .
    . 2 2 2 f 2 2 2 2 f 2 2 2 2 2 .
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 . .
    4 2 2 2 f f f f f f 2 2 2 2 . .
    4 4 2 2 2 2 2 2 2 2 2 2 2 2 . .
    4 4 4 . . 2 2 2 2 2 2 2 . . . .
    . 4 4 4 2 . 2 2 2 2 2 2 2 . . .
    . . 4 4 2 2 2 2 2 2 2 2 2 2 . .
`, SpriteKind.Enemy)
EvilDude.setPosition(300, 670)
EvilDude.follow(Jared, 90)
let RocketPack = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . f f f f f f f f f f . . .
    . . 4 4 c b b b b b b c 4 4 . .
    . . 4 4 b c b b b b c b 4 4 . .
    . . 4 4 b c b b b b c b 4 4 . .
    . . 4 4 b c b b b b c b 4 4 . .
    . . 4 4 b c b b b b c b 4 4 . .
    . . 4 4 b c b b b b c b 4 4 . .
    . . 4 4 b c b b b b c b 4 4 . .
    . . 4 4 c b b b b b b c 4 4 . .
    . . 2 2 . f f f f f f . 2 2 . .
    . . 2 2 . . . . . . . . 2 2 . .
`, SpriteKind.Food)
RocketPack.setPosition(550, 520)
info.startCountdown(60)
// Every time the game loads
game.onUpdate(function () {
    Jared.x += controller.dx()
})
