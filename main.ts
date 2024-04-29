controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectMode == -1) {
        cursor.y += -16
    } else {
        cursor.setPosition(loc1, loc2 - 16)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    selectMode = 0 - selectMode
    info.setScore(selectMode)
    if (selectMode == -1) {
        loc1 = cursor.x
        loc2 = cursor.y
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
    } else {
        cursor.setImage(img`
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            `)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectMode == -1) {
        cursor.x += -16
    } else {
        cursor.setPosition(loc1 - 16, loc2)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectMode == -1) {
        cursor.x += 16
    } else {
        cursor.setPosition(loc1 + 16, loc2)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectMode == -1) {
        cursor.y += 16
    } else {
        cursor.setPosition(loc1, loc2 + 16)
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
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . 3 3 . . . . . 3 . . . . . 
        . . . 3 3 . . . . . . 3 . . . . 
        . . 3 3 . 3 3 3 . . . 3 . . . . 
        . . 3 3 . 3 . . 3 3 . 3 . . . . 
        . . 3 3 3 . . . . . 3 3 . . . . 
        . . . 3 3 3 . 3 . . 3 3 . . . . 
        . . . . 3 3 3 3 . 3 . 3 . . . . 
        . . . . 3 3 3 3 3 3 3 . . . . . 
        . . . . . 3 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
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
let loc2 = 0
let loc1 = 0
let cursor: Sprite = null
let selectMode = 0
scene.setBackgroundColor(12)
tiles.setCurrentTilemap(tilemap`level1`)
for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 6; j++) {
        generate(i, j)
    }
}
selectMode = -1
info.setScore(selectMode)
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
grid.place(cursor, tiles.getTileLocation(0, 0))
cursor.setStayInScreen(true)
