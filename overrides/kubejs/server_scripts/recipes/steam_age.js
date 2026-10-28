let patternsToRemove = [
    /gtceu:lp_steam.*/,
    /gtceu:hp_steam.*/
]

ServerEvents.recipes(event => {
    patternsToRemove.forEach(it => {
        event.remove({ output: it })
    })

    // easy steel recipe
    event.shapeless(
        'gtceu:steel_ingot',
        [
            '#c:tools/hammer',
            '#c:ingots/iron',
            '#minecraft:coals'
        ]
    )

    // easy rubber recipe
    event.shapeless(
        'gtceu:rubber_ingot',
        [
            '#c:tools/hammer',
            'gtceu:sticky_resin'
        ]
    )

    event.shaped(
        'gtceu:rubber_plate',
        [
            'H  ',
            'S  ',
            'S  '
        ],
        {
            'S': 'gtceu:rubber_ingot',
            'H': '#c:tools/hammer'
        }
    )
})

ServerEvents.tags('item', event => {
    patternsToRemove.forEach(it => {
        Ingredient.of(it).itemIds.forEach(id => {
            event.removeAllTagsFrom(id)
            event.add('c:hidden_from_recipe_viewers', id)
        })
    })
})