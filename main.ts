controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectMode == -1) {
        grid.place(cursor, tiles.getTileLocation(grid.spriteCol(cursor), grid.spriteRow(cursor) - 1))
    } else {
        grid.place(cursor, tiles.getTileLocation(loc1, loc2 - 1))
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    selectMode = -1
    cursor.setImage(img`
        f f f f f f f f f f f f f f f f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f f f f f f f f f f f f f f f f 
        `)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectMode == 1) {
        music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        cursor.setImage(img`
            f f f f f f f f f f f f f f f f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f . . . . . . . . . . . . . . f 
            f f f f f f f f f f f f f f f f 
            `)
        selectMode = -1
        ep1 = grid.getSprites(tiles.getTileLocation(loc1, loc2))[0]
        ep2 = grid.getSprites(grid.getLocation(cursor))[0]
        grid.swap(ep1, ep2)
    } else {
        selectMode = 1
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        loc2 = grid.spriteRow(cursor)
        loc1 = grid.spriteCol(cursor)
        cursor.setImage(img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectMode == -1) {
        grid.place(cursor, tiles.getTileLocation(grid.spriteCol(cursor) - 1, grid.spriteRow(cursor)))
    } else {
        grid.place(cursor, tiles.getTileLocation(loc1 - 1, loc2))
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectMode == -1) {
        grid.place(cursor, tiles.getTileLocation(grid.spriteCol(cursor) + 1, grid.spriteRow(cursor)))
    } else {
        grid.place(cursor, tiles.getTileLocation(loc1 + 1, loc2))
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectMode == -1) {
        grid.place(cursor, tiles.getTileLocation(grid.spriteCol(cursor), grid.spriteRow(cursor) + 1))
    } else {
        grid.place(cursor, tiles.getTileLocation(loc1, loc2 + 1))
    }
})
function generate (num: number, num2: number) {
    list = [
    img`
        . f f . . . . . . . . . . f . . 
        f f 4 f . . . . . . . . f f f . 
        f 4 4 f . . . . . . . . f 4 f f 
        f 4 4 5 f f f f f f f f f 4 4 f 
        f f 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
        f f 4 4 4 4 4 4 4 4 4 4 4 4 5 f 
        f f 4 4 f 4 4 4 4 4 4 f 4 4 5 f 
        f f 4 4 4 4 4 4 4 4 4 4 4 4 f f 
        f 4 4 4 4 4 4 e f 4 4 4 4 4 f . 
        f 4 4 4 4 4 4 f f 4 4 4 4 5 f . 
        f 4 4 4 4 4 4 4 4 4 4 4 4 5 f . 
        f f 4 4 4 4 4 f f 4 4 4 5 5 f . 
        . f 4 4 4 4 4 4 4 4 4 4 5 4 f . 
        . f f f 5 4 4 4 4 4 4 5 5 4 f . 
        . . . f f f f f f f f f f f . . 
        . . . . f 8 8 8 8 8 c f . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f . . 
        . f f 5 5 5 5 5 5 5 5 5 5 f f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f f 
        . f 5 e f 5 5 5 5 5 5 5 5 5 5 f 
        . f e f f 5 5 5 5 5 5 5 5 f 5 f 
        . f f f f 5 f 5 5 5 5 f 5 f f f 
        . . . f 5 5 5 5 5 5 5 5 5 f f e 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 f f 5 5 5 5 f . 
        . . f 5 5 5 5 5 f f 5 5 5 5 f . 
        . . f 5 5 5 f 5 5 5 5 5 5 f f . 
        . . f f 5 5 5 f f f 5 5 e f e . 
        . . . f 5 5 5 5 5 5 5 e f f . . 
        . . . . f f f f f f f f e . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f . . . . . f f f . . 
        . . f 3 e f . . . . f 3 3 3 f . 
        . . f f f f f f f f f f 3 e f . 
        . . . f f 3 3 3 3 3 3 f f f . . 
        . . . f 3 3 3 3 3 3 3 3 f . . . 
        . . . f 3 f 3 3 3 3 f 3 f . . . 
        . . . f 3 3 3 f f 3 3 3 f . . . 
        . . . f 3 3 3 f f 3 3 3 f . . . 
        . . . f f 3 3 3 3 3 3 f f . . . 
        . . . . f f 3 f f 3 f f . . . . 
        . . . f f 3 f 3 3 f f . . . . . 
        . . . f 3 3 3 3 f . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . f f f . . . . . f f f f . . 
        . f 4 4 4 f f f f f 4 4 4 f . . 
        f 4 4 f f 4 4 4 4 f f 4 4 4 f . 
        f f f 4 4 4 4 4 4 4 4 f f f . . 
        . f f 4 d d d d d 4 4 4 f f . . 
        . f 4 1 1 d d d d d 1 1 f . . . 
        . f d 1 f d f f f d f 1 f . . . 
        . f d d d f c c f f d d d f . . 
        . f d d d f f f f d d d d f . . 
        . f d d d d d d d d d d f . . . 
        . . f d d d f f f d d d f . . . 
        . . f f d d d d d d f f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f f . . 
        . . f b b d d d d d d b b f f . 
        . f b b b d d d d d d d b b f . 
        . f b b d d d d d d d d b b b f 
        . f b b d f d d d d f d d b b f 
        f b b d d d d d d d d d d b b f 
        f b b f d d d f f d d d d b b f 
        f b f f d d d f f d d d f b b f 
        f b f d d d d d d d d d f b b f 
        f b f f d d d d d f d d f b b f 
        f b b f d d d f f f d d f b f . 
        f b b f f d d d d d d d f b f . 
        f b b f . f f f f f f f b b f . 
        . f b f . . . . . . . . f f f . 
        . f f f . . . . . . . . f f . . 
        `
    ]
    tile = sprites.create(list._pickRandom(), SpriteKind.Food)
    grid.place(tile, tiles.getTileLocation(num, num2))
}
function matchCheck () {
	
}
let tile: Sprite = null
let list: Image[] = []
let ep2: Sprite = null
let ep1: Sprite = null
let loc2 = 0
let loc1 = 0
let cursor: Sprite = null
let selectMode = 0
scene.setBackgroundColor(12)
tiles.setCurrentTilemap(tilemap`level`)
for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 6; j++) {
        generate(i, j)
    }
}
selectMode = -1
cursor = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . . f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Player)
cursor.setStayInScreen(true)
grid.place(cursor, tiles.getTileLocation(0, 0))
