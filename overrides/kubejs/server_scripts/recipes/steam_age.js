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
})

ServerEvents.tags('item', event => {
    patternsToRemove.forEach(it => {
        Ingredient.of(it).itemIds.forEach(id => {
            event.removeAllTagsFrom(id)
            event.add('c:hidden_from_recipe_viewers', id)
        })
    })
})