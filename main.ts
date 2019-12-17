namespace SpriteKind {
    export const Object = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Object, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Hank.ay = -50
    Trampoline.setKind(SpriteKind.Object)
    Trampoline.x += Math.randomRange(-1, 1)
    Trampoline.y += -50
})
sprites.onCreated(SpriteKind.Object, function (sprite) {
	
})
let Trampoline: Sprite = null
let Hank: Sprite = null
scene.setBackgroundColor(5)
Hank = sprites.create(img`
. . . e e e e e e e e e e e e . 
. . e e e e e e e e e e e e e e 
. e e e e e e e e e e e e e e e 
. e e e 4 4 4 4 4 e e e e e e . 
. e e 4 4 4 4 4 4 4 4 4 4 . . . 
. e 4 4 4 4 4 4 4 f f 4 4 4 . . 
. 4 4 4 4 4 4 4 4 f f 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. . 4 4 4 4 4 4 4 4 4 4 4 . . . 
. . . 4 4 4 4 4 4 4 4 4 . . . . 
. . . . . . 4 4 4 4 4 . . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . 8 8 8 8 8 8 8 8 8 8 . . . 
. . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
. 8 8 2 8 8 2 8 8 2 8 2 2 2 8 8 
`, SpriteKind.Player)
Hank.ay = 25
scene.cameraFollowSprite(Hank)
Trampoline = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . b b b b b b b b b b . . . 
. . b f d f d f d f d f d b . . 
. b b d f d f d f d f d f b b . 
. b b f d f d f d f d f d b b . 
. b b b b b b b b b b b b b b . 
. b b . . . . . . . . . . b b . 
. b b . . . . . . . . . . b b . 
. b b . . . . . . . . . . b b . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Object)
Hank.setPosition(300, 500)
Trampoline.setPosition(300, 520)
game.onUpdate(function () {
    Hank.x += controller.dx()
})
game.onUpdateInterval(5000, function () {
    Hank.ay = 50
})
