ServerEvents.recipes(event => {
    // red alloy
    event.shapeless(
        'gtceu:red_alloy_ingot',
        [
            '#c:tools/hammer',
            'minecraft:copper_ingot',
            'minecraft:redstone',
            'minecraft:redstone',
            'minecraft:redstone',
            'minecraft:redstone'
        ]
    )

    // lv circuits
    event.shaped(
        'gtceu:basic_electronic_circuit',
        [
            'R  ',
            'V  ',
            'B  '
        ],
        {
            'R': 'gtceu:resistor',
            'V': 'gtceu:vacuum_tube',
            'B': 'gtceu:resin_printed_circuit_board' 
        }
    )

    // lv circuits simpler circuit assembler recipes
    event.remove({id: 'gtceu:shaped/electronic_circuit_lv'})
    event.remove({id: 'gtceu:circuit_assembler/electronic_circuit_lv'})
    event.remove({id: 'gtceu:circuit_assembler/electronic_circuit_lv_soldering_alloy'})

    event.recipes.gtceu.circuit_assembler('kubejs/electronic_circuit_lv')
        .itemInputs(
            'gtceu:resin_circuit_board',
            '#gtceu:resistors',
            '#gtceu:circuits/ulv'
        )
        .inputFluids(Fluid.of('gtceu:tin', 144))
        .itemOutputs('gtceu:basic_electronic_circuit')
        .duration(20*5)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.circuit_assembler('kubejs/electronic_circuit_lv_soldering_alloy')
        .itemInputs(
            'gtceu:resin_circuit_board',
            '#gtceu:resistors',
            '#gtceu:circuits/ulv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('gtceu:basic_electronic_circuit')
        .duration(20*5)
        .EUt(GTValues.VA[GTValues.LV])

    event.shapeless(
        'gtceu:resin_printed_circuit_board',
        [
            'gtceu:resin_circuit_board',
            'gtceu:fine_copper_wire',
            'gtceu:fine_copper_wire',
            'gtceu:fine_copper_wire',
            'gtceu:fine_copper_wire'
        ]
    )

    // easier lv machine hulls
    event.remove({id: 'gtceu:shaped/lv_machine_hull'})
    event.remove({id: 'gtceu:assembler/hull_lv'})

    event.shaped(
        'gtceu:lv_machine_hull',
        [
            'W  ',
            'C  ',
            'T  '
        ],
        {
            'W': 'gtceu:wrought_iron_plate',
            'C': 'gtceu:lv_machine_casing',
            'T': 'gtceu:tin_single_cable'
        }
    )

    event.recipes.gtceu.assembler('kubejs/assembler/hull_lv')
        .itemInputs(
            'gtceu:lv_machine_casing',
            'gtceu:tin_single_cable'
        )
        .itemOutputs('gtceu:lv_machine_hull')
        .duration(20*2.5)
        .EUt(GTValues.VA[GTValues.LV] / 2)

    
})