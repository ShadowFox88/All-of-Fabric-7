////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.tags('item', event => {

    const replicator = [
	    'mighty_mail:package',
        'portable_tables:portable_furnace',
        'portable_tables:portable_blast_furnace',
        'indrev:tank',
        'indrev:portable_charger',
        'indrev:modular_armor_helmet',
        'indrev:modular_armor_chest',
        'indrev:modular_armor_legs',
        'indrev:modular_armor_boots',
        'indrev:lazuli_flux_container_mk1',
        'indrev:lazuli_flux_container_mk2',
        'indrev:lazuli_flux_container_mk3',
        'indrev:lazuli_flux_container_mk4',
        'kibe:tank',
        'kibe:angel_ring',
        'ae2:quantum_entangled_singularity',
        'ae2:spatial_storage_cell_2',
        'ae2:spatial_storage_cell_16',
        'ae2:spatial_storage_cell_128',
        'ae2:sky_stone_tank',
        'ae2:portable_item_cell_1k',
        'ae2:portable_item_cell_4k',
        'ae2:portable_item_cell_16k',
        'ae2:portable_item_cell_64k',
        'ae2:portable_item_cell_256k',
        'ae2:portable_fluid_cell_1k',
        'ae2:portable_fluid_cell_4k',
        'ae2:portable_fluid_cell_16k',
        'ae2:portable_fluid_cell_64k',
        'ae2:portable_fluid_cell_256k',
        'ae2:item_storage_cell_1k',
        'ae2:item_storage_cell_4k',
        'ae2:item_storage_cell_16k',
        'ae2:item_storage_cell_64k',
        'ae2:item_storage_cell_256k',
        'ae2:fluid_storage_cell_1k',
        'ae2:fluid_storage_cell_4k',
        'ae2:fluid_storage_cell_16k',
        'ae2:fluid_storage_cell_64k',
        'ae2:fluid_storage_cell_256k',
        'techreborn:basic_tank_unit',
        'techreborn:advanced_tank_unit',
        'techreborn:industrial_tank_unit',
        'techreborn:quantum_tank_unit',
        'techreborn:creative_tank_unit',
        'techreborn:lapotronic_orbpack',
        'techreborn:crude_storage_unit',
        'techreborn:basic_storage_unit',
        'techreborn:advanced_storage_unit',
        'techreborn:industrial_storage_unit',
        'techreborn:quantum_storage_unit',
        'techreborn:uu_matter',
        'techreborn:scrap_box',
        'techreborn:low_voltage_su',
        'techreborn:medium_voltage_su',
        'techreborn:high_voltage_su',
        'techreborn:interdimensional_su',
        'techreborn:auto_crafting_table',
        'dankstorage:dank_1',
        'dankstorage:dank_2',
        'dankstorage:dank_3',
        'dankstorage:dank_4',
        'dankstorage:dank_5',
        'dankstorage:dank_6',
        'dankstorage:dank_7',
        'botania:dice',
        'botania:infinite_fruit',
        'botania:king_key',
        'botania:flugel_eye',
        'botania:thor_ring',
        'botania:odin_ring',
        'botania:loki_ring',
        'botania:mana_tablet',
        'botania:mana_ring',
        'botania:mana_ring_greater',
        'minecraft:dragon_egg',
        'kibe:golden_lasso',
        'kibe:cursed_lasso',
        'kibe:diamond_lasso',
        'modern_industrialization:quantum_helmet',
        'modern_industrialization:quantum_chestplate',
        'modern_industrialization:quantum_leggings',
        'modern_industrialization:quantum_boots',
        'modern_industrialization:quantum_sword',
        'modern_industrialization:singularity',
        'techreborn:nuke',
        'artifacts:everlasting_beef',
        'artifacts:eternal_steak',
        'techreborn:heliumplasma_bucket',
        'megacells:bulk_item_cell',
        'megacells:mega_energy_cell',
        'megacells:item_storage_cell_1m',
        'megacells:item_storage_cell_4m',
        'megacells:item_storage_cell_16m',
        'megacells:item_storage_cell_64m',
        'megacells:item_storage_cell_256m',
        'megacells:fluid_storage_cell_1m',
        'megacells:fluid_storage_cell_4m',
        'megacells:fluid_storage_cell_16m',
        'megacells:fluid_storage_cell_64m',
        'megacells:fluid_storage_cell_256m',
        'megacells:portable_item_cell_1m',
        'megacells:portable_item_cell_4m',
        'megacells:portable_item_cell_16m',
        'megacells:portable_item_cell_64m',
        'megacells:portable_item_cell_256m',
        'megacells:portable_fluid_cell_1m',
        'megacells:portable_fluid_cell_4m',
        'megacells:portable_fluid_cell_16m',
        'megacells:portable_fluid_cell_64m',
        'megacells:portable_fluid_cell_256m',
        'megacells:mana_storage_cell_1m',
        'megacells:mana_storage_cell_4m',
        'megacells:mana_storage_cell_16m',
        'megacells:mana_storage_cell_64m',
        'megacells:mana_storage_cell_256m',
        'megacells:portable_mana_cell_1m',
        'megacells:portable_mana_cell_4m',
        'megacells:portable_mana_cell_16m',
        'megacells:portable_mana_cell_64m',
        'megacells:portable_mana_cell_256m',
        'travelersbackpack:standard',
        'travelersbackpack:netherite',
        'travelersbackpack:diamond',
        'travelersbackpack:gold',
        'travelersbackpack:emerald',
        'travelersbackpack:iron',
        'travelersbackpack:lapis',
        'travelersbackpack:redstone',
        'travelersbackpack:coal',
        'travelersbackpack:quartz',
        'travelersbackpack:bookshelf',
        'travelersbackpack:end',
        'travelersbackpack:nether',
        'travelersbackpack:sandstone',
        'travelersbackpack:snow',
        'travelersbackpack:sponge',
        'travelersbackpack:cake',
        'travelersbackpack:cactus',
        'travelersbackpack:hay',
        'travelersbackpack:melon',
        'travelersbackpack:pumpkin',
        'travelersbackpack:creeper',
        'travelersbackpack:dragon',
        'travelersbackpack:enderman',
        'travelersbackpack:blaze',
        'travelersbackpack:ghast',
        'travelersbackpack:magma_cube',
        'travelersbackpack:skeleton',
        'travelersbackpack:spider',
        'travelersbackpack:wither',
        'travelersbackpack:bat',
        'travelersbackpack:bee',
        'travelersbackpack:wolf',
        'travelersbackpack:fox',
        'travelersbackpack:ocelot',
        'travelersbackpack:horse',
        'travelersbackpack:cow',
        'travelersbackpack:pig',
        'travelersbackpack:sheep',
        'travelersbackpack:chicken',
        'travelersbackpack:squid',
        'travelersbackpack:villager',
        'travelersbackpack:iron_golem',
        'lootbags:loot_bag',
        'powah:battery_starter',
        'powah:battery_basic',
        'powah:battery_hardened',
        'powah:battery_blazing',
        'powah:battery_niotic',
        'powah:battery_spirited',
        'powah:battery_nitro',
        'appbot:mana_storage_cell_1k',
        'appbot:mana_storage_cell_4k',
        'appbot:mana_storage_cell_16k',
        'appbot:mana_storage_cell_64k',
        'appbot:mana_storage_cell_256k',
        'appbot:portable_mana_storage_cell_1k',
        'appbot:portable_mana_storage_cell_4k',
        'appbot:portable_mana_storage_cell_16k',
        'appbot:portable_mana_storage_cell_64k',
        'appbot:portable_mana_storage_cell_256k',
        '#create:toolboxes',
        'supplementaries:sack',
        'botania:bauble_box',
        'spectrum:present',
        '#supplementaries:presents',
        '#supplementaries:trapped_presents',
        'kibe:cooler',
        'supplementaries:safe',
        'supplementaries:cage',
        'create:chest_minecart_contraption',
        'create:furnace_minecart_contraption',
        'create:minecart_contraption',
        'ae2wtlib:wireless_universal_terminal',
        'ae2:wireless_crafting_terminal',
        'wands:stone_wand',
        'wands:iron_wand',
        'wands:diamond_wand',
        'wands:netherite_wand',
        'wands:palette',
        'ironchests:iron_dolly',
        'ironchests:diamond_dolly',
        'gag:time_sand_pouch',
        'display_case:display_case',
        'spectrum:gloves_of_dawns_grasp',
        'spectrum:heartsingers_reward',
        'spectrum:shieldgrasp_amulet',
        'wands:magic_bag_1',
        'wands:magic_bag_2',
        'wands:magic_bag_3',
        'techreborn:storage_buffer',
        'techreborn:alloy_smelter',
        'techreborn:assembly_machine',
        'techreborn:chemical_reactor',
        'techreborn:compressor',
        'techreborn:distillation_tower',
        'techreborn:extractor',
        'techreborn:fluid_replicator',
        'techreborn:grinder',
        'techreborn:electric_furnace',
        'techreborn:implosion_compressor',
        'techreborn:industrial_blast_furnace',
        'techreborn:industrial_centrifuge',
        'techreborn:industrial_electrolyzer',
        'techreborn:industrial_grinder',
        'techreborn:industrial_sawmill',
        'techreborn:iron_alloy_furnace',
        'techreborn:iron_furnace',
        'techreborn:matter_fabricator',
        'techreborn:recycler',
        'techreborn:rolling_machine',
        'techreborn:scrapboxinator',
        'techreborn:vacuum_freezer',
        'techreborn:solid_canning_machine',
        'techreborn:wire_mill',
        'techreborn:greenhouse_controller',
        'techreborn:block_breaker',
        'techreborn:block_placer',
        'techreborn:diesel_generator',
        'techreborn:fusion_control_computer',
        'techreborn:gas_turbine',
        'techreborn:plasma_generator',
        'techreborn:semi_fluid_generator',
        'techreborn:thermal_generator',
        'techreborn:adjustable_su',
        'techreborn:charge_o_mat',
        'techreborn:lapotronic_su',
        'techreborn:quantum_helmet',
        'techreborn:quantum_chestplate',
        'techreborn:quantum_leggings',
        'techreborn:quantum_boots',
        'modern_industrialization:replicator',
        'ae2:network_tool',
        'create:creative_blaze_cake',
        'wands:creative_wand',
        'the_bumblezone:honey_cocoon',
        'indrev:farmer_creative',
        'indrev:slaughter_creative',
        'indrev:rancher_creative',
        'create:creative_motor',
        'numismatic-overhaul:bronze_coin',
        'numismatic-overhaul:silver_coin',
        'numismatic-overhaul:gold_coin',
        'numismatic-overhaul:piggy_bank',
        'numismatic-overhaul:shop',
        'numismatic-overhaul:money_bag',
        'extendedae:package',
        'farmersdelight:rice_roll_medley_block',
        'croptopia:kale_smoothie',
        'farmersdelight:roasted_mutton_chops',
        'vinery:cristel_wine',
        'farmersrespite:blazing_chili',
        'frightsdelight:punchbowl_ghasttear',
        'farmersdelight:hamburger',
        'croptopia:pineapple_pepperoni_pizza',
        'spectrum:fishcake',
        'nethervinery:crimson_nether_bag',
        'nethervinery:warped_nether_bag',
        'bosses_of_mass_destruction:soul_star',
        'botania:creative_pool',
        'extendedae:infinity_cell',
        'trofers:small_pillar',
        'trofers:medium_pillar',
        'trofers:large_pillar',
        'trofers:small_plate',
        'trofers:medium_plate',
        'trofers:large_plate',
        'industrialreborn:filled_soul_vial'
        

    ];

    replicator.forEach((item) => {
        event.add('modern_industrialization:replicator_blacklist', item)
    });

});
