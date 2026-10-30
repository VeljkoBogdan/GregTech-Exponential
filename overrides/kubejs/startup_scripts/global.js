// priority 0
global.yeet = (item) => {
    ServerEvents.recipes(event => event.remove({output: item}))
    ServerEvents.tags('item', event => {
        event.removeAllTagsFrom(item)
        event.add("c:hidden_from_recipe_viewers", item)
    })
}