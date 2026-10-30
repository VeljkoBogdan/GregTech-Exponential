ServerEvents.recipes(event => {
    // conductive iron
    event.recipes.gtceu.mixer('kubejs/mixer/conductive_iron_dust')
        .itemInputs(
            'gtceu:iron_dust',
            '4x minecraft:redstone'
        )
        .itemOutputs('gtceu:conductive_iron_dust')
        .duration(6*20)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.alloy_smelter('kubejs/alloy_smelter/conductive_iron_ingot')
        .itemInputs(
            'minecraft:iron_ingot',
            '4x minecraft:redstone'
        )
        .itemOutputs('gtceu:conductive_iron_ingot')
        .duration(8*20)
        .EUt(GTValues.VA[GTValues.LV])

    // electrical steel
    event.recipes.gtceu.mixer('kubejs/mixer/electrical_steel_dust')
        .itemInputs(
            'gtceu:steel_dust',
            'gtceu:silicon_dust'
        )
        .itemOutputs('2x gtceu:electrical_steel_dust')
        .duration(8*20)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.alloy_smelter('kubejs/alloy_smelter/electrical_steel_ingot')
        .itemInputs(
            'gtceu:steel_ingot',
            'gtceu:silicon_dust'
        )
        .itemOutputs('2x gtceu:electrical_steel_ingot')
        .duration(10*20)
        .EUt(GTValues.VA[GTValues.LV])

    // energetic alloy
    event.recipes.gtceu.mixer('kubejs/mixer/energetic_alloy_dust')
        .itemInputs(
            'gtceu:gold_dust',
            'minecraft:redstone',
            'minecraft:glowstone_dust',
        )
        .itemOutputs('3x gtceu:energetic_alloy_dust')
        .duration(12*20)
        .EUt(GTValues.VA[GTValues.MV])
})