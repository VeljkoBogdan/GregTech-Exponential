let lvMachinesFromStonecutting = ['gtceu:lv_electric_furnace', 'gtceu:lv_alloy_smelter', 'gtceu:lv_arc_furnace', 'gtceu:lv_assembler', 'gtceu:lv_welder', 
    'gtceu:lv_spooler', 'gtceu:lv_autoclave', 'gtceu:lv_bender', 'gtceu:lv_brewery', 'gtceu:lv_canner', 'gtceu:lv_centrifuge', 'gtceu:lv_chemical_bath', 
    'gtceu:lv_chemical_reactor', 'gtceu:lv_compressor', 'gtceu:lv_cutter', 'gtceu:lv_distillery', 'gtceu:lv_electrolyzer', 
    'gtceu:lv_electromagnetic_separator', 'gtceu:lv_extractor', 'gtceu:lv_extruder', 'gtceu:lv_fermenter', 'gtceu:lv_fluid_heater', 
    'gtceu:lv_fluid_solidifier', 'gtceu:lv_forge_hammer', 'gtceu:lv_forming_press', 'gtceu:lv_lathe', 'gtceu:lv_scanner', 'gtceu:lv_mixer', 
    'gtceu:lv_ore_washer', 'gtceu:lv_packer', 'gtceu:lv_polarizer', 'gtceu:lv_laser_engraver', 'gtceu:lv_sifter', 'gtceu:lv_thermal_centrifuge', 
    'gtceu:lv_wiremill', 'gtceu:lv_macerator', 'gtceu:lv_gas_collector', 'gtceu:lv_rock_crusher', 'gtceu:lv_air_scrubber', 'gtceu:lv_combustion', 
    'gtceu:lv_steam_turbine', 'gtceu:lv_gas_turbine', 'gtceu:lv_pump', 'gtceu:lv_fisher', 'gtceu:lv_block_breaker', 'gtceu:lv_miner', 
    'gtceu:lv_item_collector', 'gtecore:lv_biomass_burner', 'gtecore:lv_coal_generator']
    // exceptions: circuit assembler, world accelerator, buffer

ServerEvents.recipes(event => {
    // stonecutting lv machines
    lvMachinesFromStonecutting.forEach(machine => {
        event.remove({ output: machine })
        event.stonecutting(machine, 'gtceu:lv_machine_hull')}
    )
    
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