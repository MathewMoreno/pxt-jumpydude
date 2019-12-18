namespace SpriteKind {
    export const Object = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Object, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Trampoline.setKind(SpriteKind.Object)
    Jared.vy = -110
    Trampoline.x += Math.randomRange(Math.randomRange(-30, -50), Math.randomRange(30, 50))
    Trampoline.y += -75
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.starField)
})
info.onCountdownEnd(function () {
    game.over(true, effects.confetti)
})
let Trampoline: Sprite = null
let Jared: Sprite = null
scene.setBackgroundColor(12)
Jared = sprites.create(img`
. . . . . . . . . . e e e e e . 
. . . . . . . e e e e e e e e e 
. . . . e e e e e e e e e e e . 
. . . e e e e e e e e e . . . . 
. . . e e 3 3 3 3 3 3 3 3 . . . 
. . . 3 3 3 5 3 3 5 3 3 3 . . . 
. . . 3 3 3 3 3 3 3 3 3 3 . . . 
. . . 3 3 3 3 5 5 3 3 3 3 . . . 
. . . 3 3 5 5 5 5 5 5 3 3 . . . 
. . . . 3 3 5 3 3 5 3 3 . . . . 
. . . . . . 3 3 3 3 3 . . . . . 
. . 8 8 8 8 8 8 8 8 8 8 . . . . 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
8 8 2 8 8 2 8 8 8 2 8 8 8 8 8 . 
8 8 2 8 8 2 8 8 8 8 8 8 8 8 8 8 
8 8 2 2 2 2 8 8 8 2 8 8 8 8 8 8 
`, SpriteKind.Player)
scene.cameraFollowSprite(Jared)
Jared.ay = 55
Trampoline = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. c c b b b b b b b b b b c c . 
. c c 1 f 1 f 1 f 1 f 1 f c c . 
. c c f 1 f 1 f 1 f 1 f 1 c c . 
. c c b b b b b b b b b b c c . 
. c c . . . . . . . . . . c c . 
. c c . . . . . . . . . . c c . 
. c c . . . . . . . . . . c c . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Object)
Jared.setPosition(300, 450)
Trampoline.setPosition(300, 520)
let EvilDude = sprites.create(img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f 2 f f f f f f f 2 f f f f 
f f f 2 2 f f f f f 2 2 f f f f 
f f f 2 2 2 2 2 2 2 2 2 f f f f 
f f 2 2 2 2 2 2 2 2 2 2 2 f f f 
f f 2 f f f 2 2 f f f 2 2 f f f 
f 2 2 2 f 2 2 2 2 f 2 2 2 f f f 
f 2 2 2 f 2 2 2 2 f 2 2 2 f f f 
f f 2 2 2 2 2 2 2 2 2 2 2 f f f 
f f 2 2 2 2 2 2 f f 2 2 2 f f f 
f f f 2 f f f f f 2 2 2 f f f f 
f f f 2 2 2 2 2 2 2 2 f f f f 2 
f f f f f 2 2 2 2 f f f f f f 2 
f 2 2 2 2 2 2 2 2 2 2 2 2 f 2 2 
`, SpriteKind.Enemy)
EvilDude.setPosition(300, 670)
EvilDude.follow(Jared, 90)
let RocketPack = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f f . . . 
. . . . 4 4 e b b b b e 4 4 . . 
. . . . 4 4 b e b b e b 4 4 . . 
. . . . 4 4 b e b b e b 4 4 . . 
. . . . 4 4 b e b b e b 4 4 . . 
. . . . 4 4 e b b b b e 4 4 . . 
. . . . 4 4 f b b b b f 4 4 . . 
. . . . 2 2 . f f f f . 2 2 . . 
. . . . 2 2 . . . . . . 2 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
RocketPack.setPosition(300, 670)
info.startCountdown(60)
game.onUpdate(function () {
    Jared.x += controller.dx()
})
