GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('conductive_iron')
        .ingot()
        .color(0xebb4a0)
        .components(
            'iron',
            '4x redstone'
        )
        .cableProperties(GTValues.V[GTValues.LV], 8, 0, true)

    event.create('electrical_steel')
        .ingot()
        .color(0x5a5a70)
        .components(
            'steel',
            'silicon'
        )
        .cableProperties(GTValues.V[GTValues.MV], 8, 0, true)

    event.create('energetic_alloy')
        .ingot()
        .color(0xe8882e)
        .iconSet(GTMaterialIconSet.SHINY)
        .components(
            'gold',
            'redstone',
            'glowstone'
        )
        .cableProperties(GTValues.V[GTValues.HV], 12, 0, true)
})