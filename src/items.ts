export type RawItems =
    | 'amethyst'
    | 'apple'
    | 'black_sand'
    | 'carrot'
    | 'cherry'
    | 'chilli'
    | 'clay'
    | 'coal'
    | 'coconut'
    | 'coffee_cherry'
    | 'copper_ore'
    | 'corn'
    | 'diamond'
    | 'dirt'
    | 'dodo_egg'
    | 'dodo_feather'
    | 'emerald'
    | 'flax_seed'
    | 'flax'
    | 'flint'
    | 'fur'
    | 'gold_ore'
    | 'golden_chest'
    | 'iron_ore'
    | 'kelp'
    | 'lapis_lazuli'
    | 'leather'
    | 'lime'
    | 'limestone'
    | 'mango'
    | 'maple_seed'
    | 'marble'
    | 'oil'
    | 'orange'
    | 'pine_cone'
    | 'platinum_ore'
    | 'poison'
    | 'prickly_pear'
    | 'raw_dodo_meat'
    | 'raw_fish'
    | 'red_marble'
    | 'ruby'
    | 'sand'
    | 'sapphire'
    | 'stick'
    | 'stone'
    | 'sunflower_seed'
    | 'tin_ore'
    | 'titanium_ore'
    | 'tomato'
    | 'tulip_bulb'
    | 'tulip_seed'
    | 'vine'
    | 'wheat'
    | 'wood'
    | 'worm'
    | 'yak_horn'
    | 'yak_shavings'

export type CraftedItems =
    | 'workbench_1'
    | 'workbench_2'
    | 'workbench_3'
    | 'workbench_4'
    | 'workbench_5'
    | 'workbench_6'
    | 'workbench_7'
    | 'workbench_8'
    | 'workbench_9'
    | 'workbench_10'
    | 'workbench_11'
    | 'workbench_12'
    | 'workbench_13'
    | 'workbench_14'
    | 'workbench_15'
    | 'workbench_16'
    | 'workbench_17'
    | 'workbench_18'
    | 'workbench_19'
    | 'workbench_20'
    | 'workbench_21'
    | 'workbench_22'
    | 'workbench_23'
    | 'workbench_24'
    | 'workbench_25'
    | 'workbench_26'
    | 'workbench_27'
    | 'workbench_28'
    | 'workbench_29'

    | 'campfire_1'
    | 'torch'
    | 'ember'

    | 'campfire_2'
    | 'cooked_dodo_meat'
    | 'cooked_fish'
    | 'salt'
    | 'flatbread'

    | 'tool_bench_1'
    | 'flint_spade'
    | 'flint_machete'
    | 'flint_axe'
    | 'flint_pickaxe'
    | 'flint_spear'

    | 'tool_bench_2'
    | 'stone_axe'
    | 'stone_pickaxe'
    | 'stone_spade'

    | 'tool_bench_3'
    | 'bronze_pickaxe'
    | 'bronze_machete'
    | 'bronze_sword'
    | 'tin_spade'
    | 'copper_bow_and_arrows'

    | 'tool_bench_4'
    | 'iron_pickaxe'
    | 'iron_machete'
    | 'iron_sword'
    | 'iron_axe'

    | 'tool_bench_5'
    | 'steel_pickaxe'
    | 'crowbar'
    | 'razor'

    | 'tool_bench_6'
    | 'gold_spade'
    | 'gold_pickaxe'
    | 'gold_bow_and_poison_arrows'

    | 'tool_bench_7'
    | 'titanium_sword'
    | 'titanium_pickaxe'

    | 'craft_bench_1'
    | 'basket'

    | 'craft_bench_2'
    | 'camera'
    | 'carrot_on_a_stick'
    | 'fishing_rod'
    | 'tin_foil_hat'
    | 'yeast'
    | 'dough'
    | 'mozzarella'
    | 'amethyst_chandelier'

    | 'craft_bench_3'
    | 'sapphire_chandelier'

    | 'craft_bench_4'
    | 'emerald_chandelier'

    | 'craft_bench_5'
    | 'ruby_chandelier'

    | 'craft_bench_6'
    | 'diamond_chandelier'

    | 'craft_bench_7'
    | 'carbon_fiber_wing'
    | 'jetpack_chassis'
    | 'carbon_fiber_block'
    | 'jetpack'

    | 'woodwork_bench'
    | 'wooden_bed'
    | 'chest'
    | 'boat'
    | 'ladder'
    | 'wooden_door'
    | 'sign'
    | 'trapdoor'
    | 'reinforced_platform'
    | 'shelf'
    | 'wooden_gate'
    | 'feeder_chest'
    | 'mirror'

    | 'tailors_bench_1'
    | 'string'
    | 'linen'
    | 'linen_pants'
    | 'linen_shirt'
    | 'linen_cap'
    | 'linen_brimmed_hat'

    | 'tailors_bench_2'
    | 'leather_jacket'
    | 'leather_boots'
    | 'leather_pants'
    | 'fur_coat'
    | 'fur_boots'
    | 'soft_bed'

    | 'kiln_1'
    | 'charcoal'
    | 'red_bricks'

    | 'kiln_2'
    | 'glass'
    | 'oil_lantern'
    | 'window'
    | 'black_glass'
    | 'black_window'
    | 'cup'

    | 'furnace_1'
    | 'copper_ingot'
    | 'tin_ingot'
    | 'bronze_ingot'

    | 'furnace_2'
    | 'iron_ingot'
    | 'copper_coin'

    | 'furnace_3'
    | 'steel_ingot'
    | 'gold_coin'
    | 'gold_ingot'

    | 'press_1'
    // | 'oil' // Since this can be mined, don't include the recipe
    | 'green_coffee_bean'
    | 'carbon_black'
    | 'marble_white'
    | 'red_ochre'
    | 'indian_yellow'

    | 'press_2'
    // | 'clay' // see above
    | 'ultramarine_blue'
    | 'tyrian_purple'
    | 'copper_blue'
    | 'emerald_green'
    | 'tin_foil'
    | 'crushed_limestone'
    // | 'iron_ore'
    // | 'black_sand'
    | 'flour'

    | 'press_3'
    // | 'amethyst'
    | 'amethyst_block'

    | 'press_4'
    // | 'sapphire'
    | 'sapphire_block'

    | 'press_5'
    // | 'emerald'
    | 'emerald_block'

    | 'press_6'
    // | 'ruby'
    | 'ruby_block'

    | 'press_7'
    // | 'diamond'
    | 'diamond_block'
    | 'rainbow_essence'
    | 'luminous_plaster'

    | 'compost_bench'
    | 'compost'

    | 'armor_bench_1'
    | 'tin_helmet'
    | 'tin_chest_plate'
    | 'tin_leggings'
    | 'tin_boots'

    | 'armor_bench_2'
    | 'iron_helmet'
    | 'iron_chest_plate'
    | 'iron_leggings'
    | 'iron_boots'

    | 'armor_bench_3'
    | 'carbon_fiber_helmet'
    | 'carbon_fiber_chest_plate'
    | 'carbon_fiber_leggings'
    | 'carbon_fiber_boots'
    | 'titanium_helmet'
    | 'titanium_chest_plate'
    | 'titanium_leggings'
    | 'titanium_boots'

    | 'easel_1'
    | 'easel_2'
    | 'easel_3'

    | 'painting' // Split into sizes?

    | 'builders_bench_1'
    | 'plaster'
    | 'plaster_column'
    | 'plaster_stairs'
    | 'wood_column'
    | 'wood_stairs'
    | 'stone_column'
    | 'stone_stairs'
    | 'limestone_column'
    | 'limestone_stairs'
    | 'marble_column'
    | 'marble_stairs'
    | 'sandstone_column'
    | 'sandstone_stairs'
    | 'red_marble_column'
    | 'red_marble_stairs'
    | 'lapis_lazuli_column'
    | 'lapis_lazuli_stairs'
    | 'basalt_column'
    | 'basalt_stairs'
    | 'glass_column'
    | 'glass_stairs'
    | 'black_glass_column'
    | 'black_glass_stairs'
    | 'brick_column'
    | 'brick_stairs'
    | 'ice_column'
    | 'ice_stairs'

    | 'builders_bench_2'
    | 'copper_column'
    | 'copper_stairs'
    | 'tin_column'
    | 'tin_stairs'
    | 'bronze_column'
    | 'bronze_stairs'
    | 'iron_column'
    | 'iron_stairs'
    | 'steel_column'
    | 'steel_stairs'
    | 'gold_column'
    | 'gold_stairs'
    | 'carbon_fiber_column'
    | 'carbon_fiber_stairs'
    | 'titanium_column'
    | 'titanium_stairs'
    | 'platinum_column'
    | 'platinum_stairs'
    | 'amethyst_column'
    | 'amethyst_stairs'
    | 'sapphire_column'
    | 'sapphire_stairs'
    | 'emerald_column'
    | 'emerald_stairs'
    | 'ruby_column'
    | 'ruby_stairs'
    | 'diamond_column'
    | 'diamond_stairs'


    | 'metalwork_bench_1'
    | 'bucket'
    | 'magnet'
    | 'iron_pot'

    | 'metalwork_bench_2'
    | 'cage'
    | 'copper_block'
    | 'tin_block'
    | 'bronze_block'
    | 'iron_block'

    | 'metalwork_bench_3'
    | 'steel_lantern'
    | 'steel_downlight'
    | 'steel_uplight'

    | 'metalwork_bench_4'
    | 'steel_block'
    | 'gold_block'
    | 'titanium_block'
    | 'platinum_block'
    | 'safe'
    | 'iron_door'
    | 'iron_trapdoor'
    | 'display_cabinet'

    | 'metalwork_bench_5'
    | 'copper_boiler'
    | 'copper_wire'
    | 'electric_motor'
    | 'steam_engine'

    | 'metalwork_bench_6'
    | 'electric_elevator_motor'
    | 'elevator_shaft'
    | 'silicon_wafer'

    | 'pizza_oven'
    | 'bread'
    | 'pizza'

    | 'train_yard'
    | 'rail'
    // | 'crowbar' // Also available at the tool bench
    | 'train_station'
    | 'train_wheel'
    | 'rail_handcar'
    | 'steam_locomotive'
    | 'freight_car'
    | 'passenger_car'

    | 'mixing_bench_1'
    | 'mixing_bench_2'
    | 'mixing_bench_3'
    | 'paint'
    | 'paint_stripper'

    | 'dye_bench_1'
    | 'dye_bench_2'
    | 'dye_bench_3'
    // all the clothes...

    | 'steam_generator'
    | 'electric_kiln'

    | 'electric_furnace'
    | 'pig_iron'
    | 'silicon_ingot'
    | 'silicon_crystal'
    | 'titanium_ingot'
    | 'platinum_coin'
    | 'platinum_ingot'

    | 'electric_press'
    | 'gravel'

    | 'electric_stove'
    | 'roasted_coffee_bean'
    | 'coffee'
    | 'fish_curry'
    | 'dodo_stew'
    | 'rainbow_cake'

    | 'electric_metalwork_bench'
    | 'jet_engine'

    | 'flywheel'
    | 'electric_sluice'
    | 'egg_extractor'
    | 'solar_panel'

    | 'refinery'
    | 'fuel'
    | 'raw_resin'
    | 'carbon_fiber'
    | 'epoxy'
    | 'carbon_fiber_sheet'

    | 'shop'

    // Not exactly crafted, but treated as such.
    | 'bucket_of_water'
    | 'milk'

export type Items = RawItems | CraftedItems

export type MaterialMap = {
    [K in Items]?: number
}

/**
 * A map describing how the material is crafted.
 */
export type Item = {
    /**
     * Materials the item requires to craft, but does not consume (benches)
     * Higher level items may satisfy the requirement, so workbench_1
     * will mark an item as craftable at either a level 1 or level 2 workbench.
     */
    requires?: CraftedItems
    /**
     * Extra materials crafting the item yields. (Coffee -> Bucket + Coffee)
     */
    returns?: MaterialMap
    /**
     * Materials the item requires to craft and consumed in being created.
     */
    uses: MaterialMap
}

const book: Record<CraftedItems, Item | Item[]> & Record<RawItems, true> = {
    amethyst: true,
    apple: true,
    black_sand: true,
    carrot: true,
    cherry: true,
    chilli: true,
    clay: true,
    coal: true,
    coconut: true,
    coffee_cherry: true,
    copper_ore: true,
    corn: true,
    diamond: true,
    dirt: true,
    dodo_egg: true,
    dodo_feather: true,
    emerald: true,
    flax_seed: true,
    flax: true,
    flint: true,
    fur: true,
    gold_ore: true,
    golden_chest: true,
    iron_ore: true,
    kelp: true,
    lapis_lazuli: true,
    leather: true,
    lime: true,
    limestone: true,
    mango: true,
    maple_seed: true,
    marble: true,
    oil: true,
    orange: true,
    pine_cone: true,
    platinum_ore: true,
    poison: true,
    prickly_pear: true,
    raw_dodo_meat: true,
    raw_fish: true,
    red_marble: true,
    ruby: true,
    sand: true,
    sapphire: true,
    stick: true,
    stone: true,
    sunflower_seed: true,
    tin_ore: true,
    titanium_ore: true,
    tomato: true,
    tulip_bulb: true,
    tulip_seed: true,
    vine: true,
    wheat: true,
    wood: true,
    worm: true,
    yak_horn: true,
    yak_shavings: true,

    bucket_of_water: {
        uses: {
            bucket: 1
        }
    },
    milk: {
        uses: {
            bucket: 1
        }
    },

    workbench_1: {
        uses: {
            dirt: 1,
            clay: 1,
            stick: 10
        }
    }, // Unlocks campfire
    workbench_2: {
        uses: {
            torch: 1,
            ember: 1,
            workbench_1: 1
        }
    }, // Unlocks tool bench
    workbench_3: {
        uses: {
            flint: 5,
            flax: 5,
            workbench_2: 1
        }
    }, // Unlocks craft bench
    workbench_4: {
        uses: {
            basket: 1,
            wood: 5,
            workbench_3: 1
        }
    }, // Unlocks woodwork bench
    workbench_5: {
        uses: {
            amethyst: 1,
            ladder: 1,
            flax: 5,
            workbench_4: 1
        }
    }, // Unlocks tailor's bench
    workbench_6: {
        uses: {
            amethyst: 1,
            linen: 5,
            workbench_5: 1
        }
    }, // Unlocks kiln
    workbench_7: {
        uses: {
            amethyst: 1,
            charcoal: 5,
            copper_ore: 5,
            tin_ore: 5,
            workbench_6: 1
        }
    }, // Unlocks Furnace
    workbench_8: {
        uses: {
            amethyst: 1,
            bronze_ingot: 5,
            workbench_7: 1
        }
    },
    workbench_9: {
        uses: {
            amethyst: 1,
            oil: 10,
            carbon_black: 10,
            marble_white: 10,
            workbench_8: 1
        }
    },
    workbench_10: {
        uses: {
            sapphire: 1,
            compost: 10,
            workbench_9: 1
        }
    },
    workbench_11: {
        uses: {
            sapphire: 1,
            tin_ingot: 10,
            workbench_10: 1
        }
    },
    workbench_12: {
        uses: {
            sapphire: 1,
            iron_ingot: 10,
            workbench_11: 1
        }
    },
    workbench_13: {
        uses: {
            sapphire: 1,
            red_marble_column: 1,
            lapis_lazuli_column: 1,
            workbench_12: 1
        }
    },
    workbench_14: {
        uses: {
            sapphire: 1,
            cage: 1,
            workbench_13: 1
        }
    },
    workbench_15: {
        uses: {
            emerald: 1,
            pizza: 1,
            workbench_14: 1
        }
    },
    workbench_16: {
        uses: {
            emerald: 1,
            rail: 1,
            train_wheel: 1,
            workbench_15: 1
        }
    },
    workbench_17: {
        uses: {
            emerald: 1,
            paint_stripper: 1,
            workbench_16: 1
        }
    },
    workbench_18: {
        uses: {
            emerald: 1,
            steam_engine: 1,
            workbench_17: 1
        }
    },
    workbench_19: {
        uses: {
            emerald: 1,
            copper_wire: 10,
            workbench_18: 1
        }
    },
    workbench_20: {
        uses: {
            ruby: 1,
            red_bricks: 10,
            black_glass: 10,
            workbench_19: 1
        }
    },
    workbench_21: {
        uses: {
            ruby: 1,
            titanium_ingot: 1,
            platinum_ingot: 1,
            workbench_20: 1
        }
    },
    workbench_22: {
        uses: {
            ruby: 1,
            rainbow_essence: 1,
            workbench_21: 1
        }
    },
    workbench_23: {
        uses: {
            ruby: 1,
            rainbow_cake: 1,
            workbench_22: 1
        }
    },
    workbench_24: {
        uses: {
            ruby: 1,
            electric_motor: 1,
            silicon_wafer: 20,
            workbench_23: 1
        }
    },
    workbench_25: {
        uses: {
            diamond: 1,
            steel_block: 1,
            bucket_of_water: 10,
            workbench_24: 1
        }
    },
    workbench_26: {
        uses: {
            diamond: 1,
            steel_block: 2,
            dodo_egg: 99,
            workbench_25: 1
        }
    },
    workbench_27: {
        uses: {
            diamond: 1,
            silicon_wafer: 5,
            copper_wire: 1,
            workbench_26: 1
        }
    },
    workbench_28: {
        uses: {
            diamond: 1,
            oil: 99,
            coal: 99,
            workbench_27: 1
        }
    },
    workbench_29: {
        uses: {
            diamond: 1,
            carbon_fiber_sheet: 5,
            gold_coin: 99,
            workbench_28: 1
        }
    },

    campfire_1: {
        uses: {
            stick: 10,
            wood: 10
        },
        requires: 'workbench_1'
    }, // Unlocks torch, ember
    campfire_2: {
        uses: {
            clay: 10,
            iron_ingot: 3,
            tin_foil: 5,
            campfire_1: 1
        }
    },

    // Campfire items
    ember: {
        uses: {
            wood: 1
        },
        requires: 'campfire_1'
    },
    torch: {
        uses: {
            ember: 1,
            stick: 1
        },
        requires: 'campfire_1'
    },
    cooked_dodo_meat: {
        uses: {
            raw_dodo_meat: 1
        },
        requires: 'campfire_2'
    },
    cooked_fish: {
        uses: {
            raw_fish: 1,
            tin_foil: 1
        },
        requires: 'campfire_2'
    },
    salt: [
        {
            uses: {
                bucket_of_water: 1
            },
            returns: {
                bucket: 1,
                salt: 9 // Crafts 10
            },
            requires: 'campfire_2'
        },
        {
            uses: {
                iron_pot: 1,
                bucket_of_water: 1
            },
            returns: {
                iron_pot: 1, // Confirm this
                bucket: 1,
                salt: 19
            },
            requires: 'electric_stove'
        }
    ],
    flatbread: {
        uses: {
            flour: 5,
            bucket_of_water: 1,
            salt: 1
        },
        returns: {
            bucket: 1,
            flatbread: 4 // Crafts 5
        },
        requires: 'campfire_2'
    },

    ///// Tool bench /////
    tool_bench_1: {
        uses: {
            dirt: 5,
            clay: 5,
            flint: 5
        },
        requires: 'workbench_2'
    },
    tool_bench_2: {
        uses: {
            amethyst: 1,
            stone: 10,
            string: 5,
            tool_bench_1: 1
        }
    },
    tool_bench_3: {
        uses: {
            sapphire: 1,
            bronze_ingot: 5,
            leather: 5,
            tool_bench_2: 1
        }
    },
    tool_bench_4: {
        uses: {
            emerald: 1,
            iron_ingot: 5,
            tool_bench_3: 1
        }
    },
    tool_bench_5: {
        uses: {
            ruby: 1,
            steel_ingot: 5,
            leather: 5,
            tool_bench_4: 1
        }
    },
    tool_bench_6: {
        uses: {
            diamond: 1,
            gold_ingot: 5,
            leather: 5,
            tool_bench_5: 1
        }
    },
    tool_bench_7: {
        uses: {
            diamond: 10,
            titanium_ingot: 5,
            carbon_fiber: 10,
            tool_bench_6: 1
        }
    },

    // Tool bench items
    flint_spade: {
        uses: {
            wood: 2,
            flint: 4,
            flax: 1
        },
        requires: 'tool_bench_1'
    },
    flint_machete: {
        uses: {
            wood: 2,
            flint: 4,
            flax: 1
        },
        requires: 'tool_bench_1'
    },
    flint_axe: {
        uses: {
            wood: 2,
            flint: 6,
            flax: 1
        },
        requires: 'tool_bench_1'
    },
    flint_pickaxe: {
        uses: {
            wood: 2,
            flint: 10,
            flax: 1
        },
        requires: 'tool_bench_1'
    },
    flint_spear: {
        uses: {
            wood: 2,
            flint: 2,
            flax: 1
        },
        requires: 'tool_bench_1'
    },
    stone_axe: {
        uses: {
            wood: 2,
            stone: 6,
            string: 1
        },
        requires: 'tool_bench_2'
    },
    stone_pickaxe: {
        uses: {
            wood: 2,
            stone: 10,
            string: 1
        },
        requires: 'tool_bench_2'
    },
    stone_spade: {
        uses: {
            wood: 2,
            stone: 4,
            string: 1
        },
        requires: 'tool_bench_2'
    },
    bronze_pickaxe: {
        uses: {
            wood: 2,
            bronze_ingot: 10,
            leather: 2
        },
        requires: 'tool_bench_3'
    },
    bronze_machete: {
        uses: {
            wood: 2,
            bronze_ingot: 4,
            leather: 2
        },
        requires: 'tool_bench_3'
    },
    bronze_sword: {
        uses: {
            wood: 2,
            bronze_ingot: 6,
            leather: 2
        },
        requires: 'tool_bench_3'
    },
    tin_spade: {
        uses: {
            wood: 2,
            tin_ingot: 4,
            leather: 2
        },
        requires: 'tool_bench_3'
    },
    copper_bow_and_arrows: {
        uses: {
            stick: 50,
            copper_ingot: 5,
            dodo_feather: 10,
            string: 10
        },
        requires: 'tool_bench_3'
    },
    iron_pickaxe: {
        uses: {
            wood: 2,
            iron_ingot: 10,
            leather: 2
        },
        requires: 'tool_bench_4'
    },
    iron_machete: {
        uses: {
            wood: 2,
            iron_ingot: 4,
            leather: 2
        },
        requires: 'tool_bench_4'
    },
    iron_sword: {
        uses: {
            wood: 2,
            iron_ingot: 6,
            leather: 2
        },
        requires: 'tool_bench_4'
    },
    iron_axe: {
        uses: {
            wood: 2,
            iron_ingot: 6,
            leather: 2
        },
        requires: 'tool_bench_4'
    },
    steel_pickaxe: {
        uses: {
            wood: 2,
            steel_ingot: 10,
            leather: 2
        },
        requires: 'tool_bench_5'
    },
    crowbar: [
        {
            uses: {
                steel_ingot: 5
            },
            requires: 'tool_bench_5'
        },
        {
            uses: {
                steel_ingot: 2
            },
            requires: 'train_yard'
        }
    ],
    razor: {
        uses: {
            yak_horn: 1,
            steel_ingot: 2
        },
        requires: 'tool_bench_5'
    },
    gold_spade: {
        uses: {
            wood: 2,
            gold_ingot: 4,
            leather: 2
        },
        requires: 'tool_bench_6'
    },
    gold_pickaxe: {
        uses: {
            wood: 2,
            gold_ingot: 10,
            leather: 2
        },
        requires: 'tool_bench_6'
    },
    gold_bow_and_poison_arrows: {
        uses: {
            stick: 50,
            gold_ingot: 5,
            dodo_feather: 10,
            poison: 10
        },
        requires: 'tool_bench_6'
    },
    titanium_sword: {
        uses: {
            steel_ingot: 2,
            titanium_ingot: 6,
            carbon_fiber: 10
        },
        requires: 'tool_bench_7'
    },
    titanium_pickaxe: {
        uses: {
            steel_ingot: 2,
            titanium_ingot: 10,
            carbon_fiber: 10
        },
        requires: 'tool_bench_7'
    },

    ///// Craft bench /////
    craft_bench_1: {
        uses: {
            dirt: 5,
            clay: 5,
            stick: 10
        },
        requires: 'workbench_3'
    },
    craft_bench_2: {
        uses: {
            amethyst: 1,
            limestone: 1,
            glass: 1,
            craft_bench_1: 1
        }
    },
    craft_bench_3: {
        uses: {
            amethyst_chandelier: 1,
            craft_bench_2: 1
        }
    },
    craft_bench_4: {
        uses: {
            sapphire_chandelier: 1,
            craft_bench_3: 1
        }
    },
    craft_bench_5: {
        uses: {
            emerald_chandelier: 1,
            craft_bench_4: 1
        }
    },
    craft_bench_6: {
        uses: {
            ruby_chandelier: 1,
            craft_bench_5: 1
        }
    },
    craft_bench_7: {
        uses: {
            diamond_chandelier: 1,
            craft_bench_6: 1
        }
    },

    // Craft bench items
    basket: {
        uses: {
            flax: 10
        },
        requires: 'craft_bench_1'
    },
    camera: {
        uses: {
            wood: 1,
            glass: 1,
            gold_ingot: 1,
            sapphire: 5
        },
        requires: 'craft_bench_2'
    },
    carrot_on_a_stick: {
        uses: {
            carrot: 1,
            string: 2,
            stick: 1
        },
        requires: 'craft_bench_2'
    },
    fishing_rod: {
        uses: {
            worm: 10,
            string: 10,
            stick: 1
        },
        requires: 'craft_bench_2'
    },
    tin_foil_hat: {
        uses: {
            tin_foil: 5
        },
        requires: 'craft_bench_2'
    },
    yeast: [
        {
            uses: {
                flour: 1,
                bucket_of_water: 1
            },
            returns: {
                bucket: 1
            },
            requires: 'craft_bench_2'
        },
        {
            uses: {
                yeast: 1,
                flour: 1,
                bucket_of_water: 1
            },
            returns: {
                bucket: 1,
                yeast: 4
            },
            requires: 'craft_bench_2'
        }
    ],
    dough: {
        uses: {
            flour: 1,
            bucket_of_water: 1,
            yeast: 1,
            salt: 1
        },
        returns: {
            bucket: 1
        },
        requires: 'craft_bench_2'
    },
    mozzarella: {
        uses: {
            milk: 1,
            salt: 1
        },
        returns: {
            bucket: 1
        },
        requires: 'craft_bench_2'
    },
    amethyst_chandelier: {
        uses: {
            glass: 5,
            amethyst: 20
        },
        requires: 'craft_bench_2'
    },
    sapphire_chandelier: {
        uses: {
            glass: 5,
            sapphire: 20
        },
        requires: 'craft_bench_3'
    },
    emerald_chandelier: {
        uses: {
            glass: 5,
            emerald: 20
        },
        requires: 'craft_bench_4'
    },
    ruby_chandelier: {
        uses: {
            glass: 5,
            ruby: 20
        },
        requires: 'craft_bench_5'
    },
    diamond_chandelier: {
        uses: {
            glass: 5,
            diamond: 20
        },
        requires: 'craft_bench_6'
    },
    carbon_fiber_wing: {
        uses: {
            carbon_fiber_sheet: 5
        },
        requires: 'craft_bench_7'
    },
    jetpack_chassis: {
        uses: {
            carbon_fiber_sheet: 5,
            titanium_ingot: 3
        },
        requires: 'craft_bench_7'
    },
    carbon_fiber_block: {
        uses: {
            carbon_fiber_sheet: 5
        },
        requires: 'craft_bench_7'
    },
    jetpack: {
        uses: {
            carbon_fiber_wing: 2,
            jetpack_chassis: 1,
            jet_engine: 2,
            fuel: 10
        },
        requires: 'craft_bench_7'
    },

    woodwork_bench: {
        uses: {
            dirt: 5,
            clay: 5,
            wood: 10
        },
        requires: 'workbench_4'
    },
    wooden_bed: {
        uses: {
            wood: 5,
            string: 4
        },
        requires: 'woodwork_bench'
    },
    chest: {
        uses: {
            wood: 5,
            leather: 1
        },
        requires: 'woodwork_bench'
    },
    boat: {
        uses: {
            wood: 10,
            linen: 10
        },
        requires: 'woodwork_bench'
    },
    ladder: {
        uses: {
            wood: 1
        },
        returns: {
            ladder: 1
        },
        requires: 'woodwork_bench'
    },
    wooden_door: {
        uses: {
            wood: 10,
            bronze_ingot: 1
        },
        requires: 'woodwork_bench'
    },
    sign: {
        uses: {
            wood: 5
        },
        requires: 'woodwork_bench'
    },
    trapdoor: {
        uses: {
            wood: 10,
            ladder: 1,
            bronze_ingot: 1
        },
        requires: 'woodwork_bench'
    },
    reinforced_platform: {
        uses: {
            wood: 5,
            iron_ingot: 1
        },
        returns: {
            reinforced_platform: 4
        },
        requires: 'woodwork_bench'
    },
    shelf: {
        uses: {
            wood: 5,
            leather: 1
        },
        requires: 'woodwork_bench'
    },
    wooden_gate: {
        uses: {
            wood: 5,
            iron_ingot: 1
        },
        requires: 'woodwork_bench'
    },
    feeder_chest: {
        uses: {
            chest: 1,
            bucket: 1
        },
        requires: 'woodwork_bench'
    },
    mirror: {
        uses: {
            wood: 3,
            glass: 2,
            tin_foil: 5
        },
        requires: 'woodwork_bench'
    },

    ///// Tailor's Bench /////
    tailors_bench_1: {
        uses: {
            stone: 5,
            flax: 5,
            leather: 5
        },
        requires: 'workbench_5'
    },
    tailors_bench_2: {
        uses: {
            leather: 5,
            iron_ingot: 5,
            tailors_bench_1: 1
        }
    },

    string: {
        uses: {
            flax: 2
        },
        requires: 'tailors_bench_1'
    },
    linen: {
        uses: {
            flax: 10
        },
        requires: 'tailors_bench_1'
    },
    linen_pants: {
        uses: {
            linen: 5
        },
        requires: 'tailors_bench_1'
    },
    linen_shirt: {
        uses: {
            linen: 8
        },
        requires: 'tailors_bench_1'
    },
    linen_cap: {
        uses: {
            linen: 2
        },
        requires: 'tailors_bench_1'
    },
    linen_brimmed_hat: {
        uses: {
            linen: 2
        },
        requires: 'tailors_bench_1'
    },

    leather_jacket: {
        uses: {
            leather: 10
        },
        requires: 'tailors_bench_2'
    },
    leather_boots: {
        uses: {
            leather: 5
        },
        requires: 'tailors_bench_2'
    },
    leather_pants: {
        uses: {
            leather: 5
        },
        requires: 'tailors_bench_2'
    },
    fur_coat: {
        uses: {
            fur: 10
        },
        requires: 'tailors_bench_2'
    },
    fur_boots: {
        uses: {
            fur: 5
        },
        requires: 'tailors_bench_2'
    },
    soft_bed: {
        uses: {
            wooden_bed: 1,
            leather: 5,
            linen: 5,
            dodo_feather: 10
        },
        requires: 'tailors_bench_2'
    },

    ///// Kiln /////
    kiln_1: {
        uses: {
            stone: 5,
            clay: 5,
            wood: 10
        },
        requires: 'workbench_6'
    },
    kiln_2: {
        uses: {
            iron_ingot: 5,
            kiln_1: 1
        }
    },

    // Kiln items, note that the recipes are the same at the electric bench
    // so they are not doubled.
    charcoal: {
        uses: {
            wood: 1
        },
        requires: 'kiln_1'
    },
    red_bricks: {
        uses: {
            clay: 5
        },
        requires: 'kiln_1'
    },
    glass: {
        uses: {
            sand: 1
        },
        requires: 'kiln_2'
    },
    oil_lantern: {
        uses: {
            clay: 1,
            oil: 1,
            glass: 1
        },
        returns: {
            oil_lantern: 1
        },
        requires: 'kiln_2'
    },
    window: {
        uses: {
            glass: 1,
            wood: 1
        },
        requires: 'kiln_2'
    },
    black_glass: {
        uses: {
            black_sand: 2
        },
        requires: 'kiln_2'
    },
    black_window: {
        uses: {
            black_glass: 1,
            iron_ingot: 5
        },
        requires: 'kiln_2'
    },
    cup: {
        uses: {
            clay: 3
        },
        requires: 'kiln_2'
    },

    furnace_1: {
        uses: {
            stone: 5,
            red_bricks: 5,
            charcoal: 10
        },
        requires: 'workbench_7'
    },
    furnace_2: {
        uses: {
            sapphire: 1,
            iron_ore: 5,
            coal: 10,
            furnace_1: 1
        }
    },
    furnace_3: {
        uses: {
            ruby: 1,
            gold_ore: 5,
            coal: 99,
            furnace_2: 1
        }
    },

    copper_ingot: [
        {
            uses: {
                copper_ore: 5
            },
            requires: 'furnace_1'
        },
        // {
        //     uses: {
        //         copper_coin: 10
        //     },
        //     requires: 'furnace_2'
        // }
    ],
    tin_ingot: {
        uses: {
            tin_ore: 5
        },
        requires: 'furnace_1'
    },
    bronze_ingot: {
        uses: {
            copper_ingot: 2,
            tin_ingot: 1
        },
        requires: 'furnace_1'
    },

    iron_ingot: [
        {
            uses: {
                iron_ore: 5
            },
            requires: 'furnace_2'
        },
        {
            uses: {
                pig_iron: 2
            },
            requires: 'electric_furnace'
        }
    ],
    copper_coin: {
        uses: {
            copper_ingot: 1
        },
        requires: 'furnace_2'
    },

    steel_ingot: {
        uses: {
            iron_ingot: 2,
            coal: 5
        },
        requires: 'furnace_3'
    },
    gold_coin: {
        uses: {
            gold_ingot: 1
        },
        returns: {
            gold_coin: 9
        },
        requires: 'furnace_3'
    },
    gold_ingot: [
        {
            uses: {
                gold_ore: 5
            },
            requires: 'furnace_3'
        },
        // {
        //     uses: {
        //         gold_coin: 10
        //     },
        //     requires: 'furnace_3'
        // }
        // Disabled because otherwise it will try to tell you to find
        // a ton of golden chests to smelt down...
        // PR welcome with a better solution.
        // {
        //     uses: {
        //         golden_chest: 1
        //     },
        //     requires: 'furnace_3'
        // }
    ],

    press_1: {
        uses: {
            stone: 5,
            red_bricks: 5,
            wood: 10
        },
        requires: 'workbench_8'
    },
    press_2: {
        uses: {
            bronze_ingot: 5,
            iron_ingot: 5,
            press_1: 1
        }
    },
    press_3: {
        uses: {
            amethyst: 1,
            iron_ingot: 5,
            press_2: 1
        }
    },
    press_4: {
        uses: {
            sapphire: 1,
            iron_ingot: 5,
            press_3: 1
        }
    },
    press_5: {
        uses: {
            emerald: 1,
            iron_ingot: 5,
            press_4: 1
        }
    },
    press_6: {
        uses: {
            ruby: 1,
            iron_ingot: 5,
            press_5: 1
        }
    },
    press_7: {
        uses: {
            diamond: 1,
            iron_ingot: 5,
            press_6: 1
        }
    },

    green_coffee_bean: {
        uses: {
            coffee_cherry: 1
        },
        requires: 'press_1'
    },
    carbon_black: {
        uses: {
            charcoal: 5
        },
        requires: 'press_1'
    },
    marble_white: {
        uses: {
            marble: 1
        },
        requires: 'press_1'
    },
    red_ochre: {
        uses: {
            clay: 10
        },
        requires: 'press_1'
    },
    indian_yellow: {
        uses: {
            mango: 1
        },
        requires: 'press_1'
    },

    // clay
    ultramarine_blue: {
        uses: {
            lapis_lazuli: 1
        },
        requires: 'press_2'
    },
    tyrian_purple: {
        uses: {
            dodo_feather: 5
        },
        requires: 'press_2'
    },
    copper_blue: {
        uses: {
            copper_ore: 10
        },
        requires: 'press_2'
    },
    emerald_green: {
        uses: {
            emerald: 1
        },
        requires: 'press_2'
    },
    tin_foil: {
        uses: {
            tin_ingot: 2
        },
        requires: 'press_2'
    },
    crushed_limestone: [
        {
            uses: {
                limestone: 1
            },
            returns: {
                crushed_limestone: 1
            },
            requires: 'press_2'
        },
        {
            uses: {
                limestone: 1
            },
            returns: {
                crushed_limestone: 1
            },
            requires: 'electric_press'
        }
    ],
    // iron ore
    // black sand
    flour: {
        uses: {
            wheat: 10,
            linen: 1
        },
        returns: {
            flour: 9
        },
        requires: 'press_2'
    },

    amethyst_block: [
        {
            uses: {
                amethyst: 5
            },
            requires: 'press_3'
        },
        {
            uses: {
                amethyst: 5
            },
            requires: 'electric_press'
        }
    ],
    sapphire_block: [
        {
            uses: {
                sapphire: 5
            },
            requires: 'press_4'
        },
        {
            uses: {
                sapphire: 5
            },
            requires: 'electric_press'
        }
    ],
    emerald_block: [
        {
            uses: {
                emerald: 5
            },
            requires: 'press_5'
        },
        {
            uses: {
                emerald: 5
            },
            requires: 'electric_press'
        }
    ],
    ruby_block: [
        {
            uses: {
                ruby: 5
            },
            requires: 'press_6'
        },
        {
            uses: {
                ruby: 5
            },
            requires: 'electric_press'
        }
    ],
    diamond_block: [
        {
            uses: {
                diamond: 5
            },
            requires: 'press_7'
        },
        {
            uses: {
                diamond: 5
            },
            requires: 'electric_press'
        }
    ],
    rainbow_essence: [
        {
            uses: {
                amethyst: 1,
                sapphire: 1,
                emerald: 1,
                ruby: 1,
                diamond: 1
            },
            returns: {
                rainbow_essence: 4
            },
            requires: 'press_7'
        },
        {
            uses: {
                amethyst: 1,
                sapphire: 1,
                emerald: 1,
                ruby: 1,
                diamond: 1
            },
            returns: {
                rainbow_essence: 4
            },
            requires: 'electric_press'
        }
    ],
    luminous_plaster: [
        {
            uses: {
                plaster: 5,
                rainbow_essence: 1
            },
            returns: {
                luminous_plaster: 4
            },
            requires: 'press_7'
        },
        {
            uses: {
                plaster: 5,
                rainbow_essence: 1
            },
            returns: {
                luminous_plaster: 4
            },
            requires: 'electric_press'
        }
    ],

    compost_bench: {
        uses: {
            wood: 5,
            dirt: 5,
            worm: 20
        },
        requires: 'workbench_9'
    },

    compost: [
        {
            uses: {
                worm: 1,
                pine_cone: 10
            },
            requires: 'compost_bench'
        },
        {
            uses: {
                worm: 1,
                apple: 10
            },
            requires: 'compost_bench'
        },
        {
            uses: {
                worm: 1,
                mango: 10
            },
            requires: 'compost_bench'
        },
        {
            uses: {
                worm: 1,
                maple_seed: 10
            },
            requires: 'compost_bench'
        },
        {
            uses: {
                worm: 1,
                prickly_pear: 10
            },
            requires: 'compost_bench'
        },
        {
            uses: {
                worm: 1,
                coconut: 10
            },
            requires: 'compost_bench'
        },
        {
            uses: {
                worm: 1,
                flax_seed: 10
            },
            requires: 'compost_bench'
        },
        {
            uses: {
                worm: 1,
                flax: 10
            },
            requires: 'compost_bench'
        },
        {
            uses: {
                worm: 1,
                orange: 10
            },
            requires: 'compost_bench'
        },
        {
            uses: {
                worm: 1,
                lime: 10
            },
            requires: 'compost_bench'
        },
        {
            uses: {
                worm: 1,
                sunflower_seed: 10
            },
            requires: 'compost_bench'
        },
        {
            uses: {
                worm: 1,
                corn: 10
            },
            requires: 'compost_bench'
        },
        {
            uses: {
                worm: 1,
                carrot: 10
            },
            requires: 'compost_bench'
        },
        {
            uses: {
                worm: 1,
                cherry: 10
            },
            requires: 'compost_bench'
        },
        {
            uses: {
                worm: 1,
                chilli: 10
            },
            requires: 'compost_bench'
        },
        {
            uses: {
                worm: 1,
                tomato: 10
            },
            requires: 'compost_bench'
        },
        {
            uses: {
                worm: 1,
                wheat: 10
            },
            requires: 'compost_bench'
        },
        {
            uses: {
                worm: 1,
                kelp: 10
            },
            requires: 'compost_bench'
        },
        {
            uses: {
                worm: 1,
                vine: 10
            },
            requires: 'compost_bench'
        },
        {
            uses: {
                worm: 1,
                tulip_seed: 10
            },
            requires: 'compost_bench'
        },
        {
            uses: {
                worm: 1,
                tulip_bulb: 10
            },
            requires: 'compost_bench'
        },
        {
            uses: {
                worm: 1,
                coffee_cherry: 10
            },
            requires: 'compost_bench'
        },
        {
            uses: {
                worm: 1,
                raw_dodo_meat: 10
            },
            requires: 'compost_bench'
        },
        {
            uses: {
                worm: 1,
                raw_fish: 10
            },
            requires: 'compost_bench'
        }
    ],

    armor_bench_1: {
        uses: {
            stone: 5,
            tin_ingot: 10
        },
        requires: 'workbench_10'
    },
    armor_bench_2: {
        uses: {
            ruby: 5,
            iron_ingot: 5,
            armor_bench_1: 1
        }
    },
    armor_bench_3: {
        uses: {
            diamond: 5,
            titanium_ingot: 5,
            armor_bench_2: 1
        }
    },

    tin_helmet: {
        uses: {
            tin_ingot: 4,
            leather: 2
        },
        requires: 'armor_bench_1'
    },
    tin_chest_plate: {
        uses: {
            tin_ingot: 10,
            leather: 4
        },
        requires: 'armor_bench_1'
    },
    tin_leggings: {
        uses: {
            tin_ingot: 6,
            leather: 3
        },
        requires: 'armor_bench_1'
    },
    tin_boots: {
        uses: {
            tin_ingot: 4,
            leather: 2
        },
        requires: 'armor_bench_1'
    },

    iron_helmet: {
        uses: {
            iron_ingot: 4,
            leather: 2,
            linen: 2
        },
        requires: 'armor_bench_2'
    },
    iron_chest_plate: {
        uses: {
            iron_ingot: 10,
            leather: 4,
            linen: 4
        },
        requires: 'armor_bench_2'
    },
    iron_leggings: {
        uses: {
            iron_ingot: 6,
            leather: 3,
            linen: 3
        },
        requires: 'armor_bench_2'
    },
    iron_boots: {
        uses: {
            iron_ingot: 4,
            leather: 2,
            linen: 2
        },
        requires: 'armor_bench_2'
    },

    carbon_fiber_helmet: {
        uses: {
            carbon_fiber_sheet: 4,
            leather: 4,
            linen: 4,
            black_glass: 4
        },
        requires: 'armor_bench_3'
    },
    carbon_fiber_chest_plate: {
        uses: {
            carbon_fiber_sheet: 10,
            leather: 10,
            linen: 10,
            black_glass: 10
        },
        requires: 'armor_bench_3'
    },
    carbon_fiber_leggings: {
        uses: {
            carbon_fiber_sheet: 6,
            leather: 6,
            linen: 6,
            black_glass: 6
        },
        requires: 'armor_bench_3'
    },
    carbon_fiber_boots: {
        uses: {
            carbon_fiber_sheet: 4,
            leather: 4,
            linen: 4,
            black_glass: 4
        },
        requires: 'armor_bench_3'
    },

    titanium_helmet: {
        uses: {
            titanium_ingot: 4,
            leather: 4,
            linen: 4,
            emerald: 4
        },
        requires: 'armor_bench_3'
    },
    titanium_chest_plate: {
        uses: {
            titanium_ingot: 10,
            leather: 10,
            linen: 10,
            emerald: 10
        },
        requires: 'armor_bench_3'
    },
    titanium_leggings: {
        uses: {
            titanium_ingot: 6,
            leather: 6,
            linen: 6,
            emerald: 6
        },
        requires: 'armor_bench_3'
    },
    titanium_boots: {
        uses: {
            titanium_ingot: 4,
            leather: 4,
            linen: 4,
            emerald: 4
        },
        requires: 'armor_bench_3'
    },

    easel_1: {
        uses: {
            wood: 5
        },
        requires: 'workbench_11'
    },
    easel_2: {
        uses: {
            bronze_ingot: 3,
            easel_1: 1
        }
    },
    easel_3: {
        uses: {
            steel_ingot: 3,
            easel_2: 1
        }
    },
    painting: {
        // Skipping the other painting requirements, needs to be split up
        uses: {
            wood: 1,
            linen: 1,
            oil: 1
            // pigment: 1 // Why :( this can be any combination of pigments...
        },
        requires: 'easel_1'
    },

    builders_bench_1: {
        uses: {
            stone: 5,
            limestone: 5,
            marble: 5
        },
        requires: 'workbench_12'
    },
    builders_bench_2: {
        uses: {
            gold_block: 1,
            builders_bench_1: 1
        }
    },

    plaster: {
        uses: {
            crushed_limestone: 1,
            sand: 1,
            yak_shavings: 1,
            bucket_of_water: 1
        },
        requires: 'builders_bench_1'
    },

    ...mapKeys(
        key =>
            ({
                uses: { [key.replace(/_column$|_stairs$/, '')]: 1 },
                requires: 'builders_bench_1'
            } as Item),
        'plaster_column',
        'plaster_stairs',
        'wood_column',
        'wood_stairs',
        'stone_column',
        'stone_stairs',
        'limestone_column',
        'limestone_stairs',
        'marble_column',
        'marble_stairs',
        'sandstone_column',
        'sandstone_stairs',
        'red_marble_column',
        'red_marble_stairs',
        'lapis_lazuli_column',
        'lapis_lazuli_stairs',
        'basalt_column',
        'basalt_stairs',
        'glass_column',
        'glass_stairs',
        'black_glass_column',
        'black_glass_stairs',
        'ice_column',
        'ice_stairs'
    ),

    brick_column: {
        uses: { red_bricks: 1 },
        requires: 'builders_bench_1'
    },
    brick_stairs: {
        uses: { red_bricks: 1 },
        requires: 'builders_bench_1'
    },

    ...mapKeys(
        key =>
            ({
                uses: {
                    [key.replace(/_column$|_stairs$/, '_block')]: 1
                },
                requires: 'builders_bench_2'
            } as Item),
        'copper_column',
        'copper_stairs',
        'tin_column',
        'tin_stairs',
        'bronze_column',
        'bronze_stairs',
        'iron_column',
        'iron_stairs',
        'steel_column',
        'steel_stairs',
        'gold_column',
        'gold_stairs',
        'titanium_column',
        'titanium_stairs',
        'platinum_column',
        'platinum_stairs',
        'amethyst_column',
        'amethyst_stairs',
        'sapphire_column',
        'sapphire_stairs',
        'emerald_column',
        'emerald_stairs',
        'ruby_column',
        'ruby_stairs',
        'diamond_column',
        'diamond_stairs'
    ),

    carbon_fiber_column: {
        uses: { carbon_fiber_sheet: 2 },
        requires: 'builders_bench_2'
    },
    carbon_fiber_stairs: {
        uses: { carbon_fiber_sheet: 2 },
        requires: 'builders_bench_2'
    },

    metalwork_bench_1: {
        uses: {
            bronze_ingot: 5,
            coal: 5
        },
        requires: 'workbench_13'
    },
    metalwork_bench_2: {
        uses: {
            amethyst: 1,
            bronze_ingot: 5,
            metalwork_bench_1: 1
        }
    },
    metalwork_bench_3: {
        uses: {
            sapphire: 1,
            iron_ingot: 5,
            metalwork_bench_2: 1
        }
    },
    metalwork_bench_4: {
        uses: {
            emerald: 1,
            steel_ingot: 5,
            metalwork_bench_3: 1
        }
    },
    metalwork_bench_5: {
        uses: {
            ruby: 1,
            gold_ingot: 5,
            metalwork_bench_4: 1
        }
    },
    metalwork_bench_6: {
        uses: {
            diamond: 1,
            titanium_ingot: 5,
            metalwork_bench_5: 1
        }
    },

    bucket: [
        {
            uses: {
                tin_ingot: 5
            },
            requires: 'metalwork_bench_1'
        },
        {
            uses: {
                tin_ingot: 3
            },
            requires: 'electric_metalwork_bench'
        }
    ],
    magnet: [
        {
            uses: {
                iron_ingot: 2,
                black_sand: 2
            },
            requires: 'metalwork_bench_1'
        },
        {
            uses: {
                iron_ingot: 1,
                black_sand: 1
            },
            requires: 'electric_metalwork_bench'
        }
    ],
    iron_pot: [
        {
            uses: {
                iron_ingot: 5
            },
            requires: 'metalwork_bench_1'
        },
        {
            uses: {
                iron_ingot: 3
            },
            requires: 'electric_metalwork_bench'
        }
    ],

    cage: [
        {
            uses: {
                iron_ingot: 5
            },
            requires: 'metalwork_bench_2'
        },
        {
            uses: {
                iron_ingot: 3
            },
            requires: 'electric_metalwork_bench'
        }
    ],
    ...mapKeys(
        key =>
            ({
                uses: {
                    [key.replace('block', 'ingot')]: 5
                },
                requires: 'metalwork_bench_2'
            } as Item),
        'copper_block',
        'tin_block',
        'bronze_block',
        'iron_block'
    ),

    steel_lantern: [
        {
            uses: {
                steel_ingot: 1,
                glass: 1,
                oil: 1,
                ember: 1
            },
            returns: {
                steel_lantern: 2
            },
            requires: 'metalwork_bench_3'
        },
        {
            uses: {
                steel_ingot: 1,
                glass: 1,
                oil: 1
            },
            returns: {
                steel_lantern: 4
            },
            requires: 'electric_metalwork_bench'
        }
    ],
    steel_downlight: [
        {
            uses: {
                steel_ingot: 1,
                glass: 1,
                oil: 1,
                ember: 1
            },
            returns: {
                steel_downlight: 2
            },
            requires: 'metalwork_bench_3'
        },
        {
            uses: {
                steel_ingot: 1,
                glass: 1,
                oil: 1
            },
            returns: {
                steel_downlight: 4
            },
            requires: 'electric_metalwork_bench'
        }
    ],
    steel_uplight: [
        {
            uses: {
                steel_ingot: 1,
                glass: 1,
                oil: 1,
                ember: 1
            },
            returns: {
                steel_uplight: 2
            },
            requires: 'metalwork_bench_3'
        },
        {
            uses: {
                steel_ingot: 1,
                glass: 1,
                oil: 1
            },
            returns: {
                steel_uplight: 4
            },
            requires: 'electric_metalwork_bench'
        }
    ],

    ...mapKeys(
        key =>
            ({
                uses: {
                    [key.replace('block', 'ingot')]: 5
                },
                requires: 'metalwork_bench_4'
            } as Item),
        'steel_block',
        'gold_block',
        'titanium_block',
        'platinum_block'
    ),
    safe: [
        {
            uses: {
                steel_ingot: 5
            },
            requires: 'metalwork_bench_4'
        },
        {
            uses: {
                iron_ingot: 5
            },
            requires: 'electric_metalwork_bench'
        }
    ],
    iron_door: [
        {
            uses: {
                iron_block: 2
            },
            requires: 'metalwork_bench_4'
        },
        {
            uses: {
                iron_block: 2
            },
            requires: 'electric_metalwork_bench'
        }
    ],
    iron_trapdoor: [
        {
            uses: {
                iron_block: 1,
                ladder: 1
            },
            requires: 'metalwork_bench_4'
        },
        {
            uses: {
                iron_block: 1,
                ladder: 1
            },
            requires: 'electric_metalwork_bench'
        }
    ],
    display_cabinet: [
        {
            uses: {
                iron_block: 1,
                black_glass: 1
            },
            requires: 'metalwork_bench_4'
        },
        {
            uses: {
                iron_ingot: 2,
                black_glass: 1
            },
            requires: 'electric_metalwork_bench'
        }
    ],

    copper_boiler: [
        {
            uses: {
                copper_block: 2,
                copper_ingot: 10,
                bucket_of_water: 1
            },
            requires: 'metalwork_bench_5'
        },
        {
            uses: {
                copper_ingot: 5,
                bucket_of_water: 1
            },
            requires: 'electric_metalwork_bench'
        }
    ],
    copper_wire: [
        {
            uses: {
                copper_ingot: 1
            },
            returns: {
                copper_wire: 1
            },
            requires: 'metalwork_bench_5'
        },
        {
            uses: {
                copper_ingot: 1
            },
            returns: {
                copper_wire: 4
            },
            requires: 'electric_metalwork_bench'
        }
    ],
    electric_motor: [
        {
            uses: {
                steel_block: 2,
                magnet: 5,
                copper_wire: 10
            },
            requires: 'metalwork_bench_5'
        },
        {
            uses: {
                steel_ingot: 5,
                magnet: 1,
                copper_wire: 10
            },
            requires: 'electric_metalwork_bench'
        }
    ],
    steam_engine: [
        {
            uses: {
                steel_block: 2,
                copper_boiler: 1,
                coal: 99
            },
            requires: 'metalwork_bench_5'
        },
        {
            uses: {
                steel_ingot: 5,
                copper_boiler: 1,
                coal: 10
            },
            requires: 'electric_metalwork_bench'
        }
    ],

    electric_elevator_motor: [
        {
            uses: {
                steel_block: 2,
                electric_motor: 1,
                copper_wire: 99
            },
            requires: 'metalwork_bench_6'
        },
        {
            uses: {
                steel_block: 1,
                electric_motor: 1,
                copper_wire: 10
            },
            requires: 'electric_metalwork_bench'
        }
    ],
    elevator_shaft: [
        {
            uses: {
                steel_block: 1,
                copper_wire: 5
            },
            requires: 'metalwork_bench_6'
        },
        {
            uses: {
                steel_block: 1,
                copper_wire: 5
            },
            returns: {
                elevator_shaft: 4
            },
            requires: 'electric_metalwork_bench'
        }
    ],

    silicon_wafer: [
        {
            uses: {
                silicon_crystal: 1
            },
            returns: {
                silicon_wafer: 1
            },
            requires: 'metalwork_bench_6'
        },
        {
            uses: {
                silicon_crystal: 1
            },
            returns: {
                silicon_wafer: 4
            },
            requires: 'electric_metalwork_bench'
        }
    ],

    pizza_oven: {
        uses: {
            clay: 5,
            sand: 5,
            red_bricks: 1,
            plaster: 10
        },
        requires: 'workbench_14'
    },
    bread: {
        uses: {
            dough: 1
        },
        requires: 'pizza_oven'
    },
    pizza: {
        uses: {
            dough: 1,
            mozzarella: 1,
            tomato: 1
        },
        requires: 'pizza_oven'
    },

    train_yard: {
        uses: {
            bronze_block: 1,
            steel_ingot: 5
        },
        requires: 'workbench_15'
    },
    rail: {
        uses: {
            wood: 1,
            steel_ingot: 2
        },
        returns: {
            rail: 9
        },
        requires: 'train_yard'
    },
    // crowbar
    train_station: {
        uses: {
            wood: 3,
            rail: 3
        },
        requires: 'train_yard'
    },
    train_wheel: {
        uses: {
            steel_ingot: 3
        },
        requires: 'train_yard'
    },
    rail_handcar: {
        uses: {
            train_wheel: 4,
            wood: 2
        },
        requires: 'train_yard'
    },
    steam_locomotive: {
        uses: {
            train_wheel: 6,
            steam_engine: 1,
            iron_block: 1,
            coal: 10
        },
        requires: 'train_yard'
    },
    freight_car: {
        uses: {
            train_wheel: 4,
            wood: 1,
            chest: 1
        },
        requires: 'train_yard'
    },
    passenger_car: {
        uses: {
            train_wheel: 4,
            wood: 1,
            iron_block: 1
        },
        requires: 'train_yard'
    },

    mixing_bench_1: {
        uses: {
            bronze_block: 1,
            bucket: 1,
            oil: 5
        },
        requires: 'workbench_16'
    },
    mixing_bench_2: {
        uses: {
            bucket: 1,
            mixing_bench_1: 1
        }
    },
    mixing_bench_3: {
        uses: {
            bucket: 1,
            mixing_bench_2: 1
        }
    },

    paint: {
        uses: {
            bucket: 1,
            oil: 5
            // pigment: 1 // :(
        },
        requires: 'mixing_bench_1'
    },
    paint_stripper: {
        uses: {
            bucket: 1,
            oil: 5
        },
        requires: 'mixing_bench_1'
    },

    dye_bench_1: {
        uses: {
            bronze_block: 1,
            bucket_of_water: 1,
            linen: 5
        },
        requires: 'workbench_17'
    },
    dye_bench_2: {
        uses: {
            bucket_of_water: 1,
            dye_bench_1: 1
        }
    },
    dye_bench_3: {
        uses: {
            bucket_of_water: 1,
            dye_bench_2: 1
        }
    },

    steam_generator: {
        uses: {
            steel_block: 1,
            steam_engine: 1,
            electric_motor: 1
        },
        requires: 'workbench_18'
    },

    electric_kiln: {
        uses: {
            steel_block: 1,
            red_bricks: 1,
            copper_wire: 10
        },
        requires: 'workbench_19'
    },

    electric_furnace: {
        uses: {
            steel_block: 1,
            iron_ingot: 1,
            copper_wire: 10
        },
        requires: 'workbench_20'
    },
    pig_iron: {
        uses: {
            iron_ore: 1,
            limestone: 1
        },
        requires: 'electric_furnace'
    },
    silicon_ingot: {
        uses: {
            sand: 10,
            black_sand: 10
        },
        requires: 'electric_furnace'
    },
    silicon_crystal: {
        uses: {
            silicon_ingot: 5
        },
        requires: 'electric_furnace'
    },
    titanium_ingot: {
        uses: {
            titanium_ore: 5
        },
        requires: 'electric_furnace'
    },
    platinum_coin: {
        uses: {
            platinum_ingot: 1
        },
        requires: 'electric_furnace'
    },
    platinum_ingot: [
        {
            uses: {
                platinum_ore: 5
            },
            requires: 'electric_furnace'
        },
        // {
        //     uses: {
        //         platinum_coin: 1
        //     },
        //     requires: 'electric_furnace'
        // }
    ],

    electric_press: {
        uses: {
            steel_block: 1,
            copper_block: 1,
            copper_wire: 10
        },
        requires: 'workbench_21'
    },
    gravel: {
        uses: {
            stone: 2
        },
        requires: 'electric_press'
    },

    electric_stove: {
        uses: {
            steel_block: 1,
            iron_pot: 1,
            copper_wire: 10
        },
        requires: 'workbench_22'
    },
    roasted_coffee_bean: {
        uses: {
            green_coffee_bean: 1
        },
        requires: 'electric_stove'
    },
    coffee: {
        uses: {
            cup: 1,
            bucket_of_water: 1,
            roasted_coffee_bean: 1
        },
        returns: {
            bucket: 1
        },
        requires: 'electric_stove'
    },
    fish_curry: {
        uses: {
            iron_pot: 1,
            raw_fish: 1,
            chilli: 1,
            coconut: 1,
            salt: 1
        },
        requires: 'electric_stove'
    },
    dodo_stew: {
        uses: {
            iron_pot: 1,
            raw_dodo_meat: 1,
            carrot: 1,
            corn: 1,
            salt: 1
        },
        requires: 'electric_stove'
    },
    rainbow_cake: {
        uses: {
            rainbow_essence: 1,
            flour: 1,
            milk: 1,
            dodo_egg: 1,
            salt: 1
        },
        requires: 'electric_stove'
    },

    electric_metalwork_bench: {
        uses: {
            steel_block: 1,
            steel_ingot: 1,
            copper_wire: 10
        },
        requires: 'workbench_23'
    },
    jet_engine: {
        uses: {
            titanium_ingot: 3,
            carbon_fiber_sheet: 5
        },
        requires: 'electric_metalwork_bench'
    },

    flywheel: {
        uses: {
            steel_block: 1,
            copper_block: 1,
            electric_motor: 1,
            copper_wire: 10
        },
        requires: 'workbench_24'
    },
    electric_sluice: {
        uses: {
            steel_block: 1,
            electric_motor: 1,
            bucket_of_water: 1,
            copper_wire: 10
        },
        requires: 'workbench_25'
    },
    egg_extractor: {
        uses: {
            steel_block: 1,
            electric_motor: 1,
            dodo_egg: 1,
            copper_wire: 10
        },
        requires: 'workbench_26'
    },
    solar_panel: {
        uses: {
            steel_block: 1,
            silicon_wafer: 3,
            copper_wire: 10
        },
        requires: 'workbench_27'
    },

    refinery: {
        uses: {
            electric_furnace: 1,
            copper_boiler: 1,
            copper_wire: 10,
            oil: 10
        },
        requires: 'workbench_28'
    },
    fuel: {
        uses: {
            oil: 10
        },
        requires: 'refinery'
    },
    raw_resin: {
        uses: {
            oil: 10
        },
        requires: 'refinery'
    },
    carbon_fiber: {
        uses: {
            coal: 10,
            raw_resin: 2
        },
        requires: 'refinery'
    },
    epoxy: {
        uses: {
            raw_resin: 1
        },
        requires: 'refinery'
    },
    carbon_fiber_sheet: {
        uses: {
            epoxy: 1,
            carbon_fiber: 1
        }
    },

    shop: {
        uses: {
            wood: 1,
            gold_coin: 99
        },
        requires: 'workbench_29'
    }
};

function mapKeys<T, K extends string[]>(fn: (key: K[number]) => T, ...keys: K): {
    [K2 in K[number]]: T
} {
    return keys.reduce((acc, key) => {
        return {
            ...acc,
            [key]: fn(key)
        }
    }, {} as any)
}

function toArray<T>(a: T | T[]) {
    return Array.isArray(a) ? a : [a]
}

function isCraftedItem(item: Items): item is CraftedItems {
    return book[item] !== true
}

const inventory: MaterialMap = {}
const collected: MaterialMap = {}

function collect(item: Items, count = 1) {
    collected[item] = (collected[item] ?? 0) + count
    inventory[item] = (inventory[item] ?? 0) + count
}

function hasRequired(item?: Items) {
    if (!item) {
        return true
    }
    if (/_\d+$/.test(item)) {
        const [_, bench, min] = item.match(/(.*)_(\d+)$/)!
        for (let i = +min; i < 30; i++) {
            if (inventory[`${bench}_${i}` as Items]) {
                return true
            }
        }
    }
    return !!inventory[item]
}

function getReturns(item: Item) {
    return Object.entries(item.returns ?? {}) as [Items, number][]
}

function getUses(item: Item) {
    return Object.entries(item.uses) as [Items, number][]
}

function getRawMaterials(map: MaterialMap) {
    const result: MaterialMap = {}
    for (const [item, count] of Object.entries(map) as [Items, number][]) {
        if (!isCraftedItem(item)) {
            result[item] = count
        }
    }
    return result
}

function findBestRecipe(recipes: Item[]) {
    if (recipes === book.yeast) { // Hack... Need to consider items to find the best recipe.
        return inventory.yeast ? recipes[1] : recipes[0]
    }

    for (let i = recipes.length - 1; i > 0; i--) {
        if (hasRequired(recipes[i].requires)) {
            return recipes[i];
        }
    }
    return recipes[0]
}

function craft(item: Items) {
    if (isCraftedItem(item)) {
        const recipe = findBestRecipe(toArray(book[item]))
        if (!hasRequired(recipe.requires)) {
            craft(recipe.requires!)
        }

        for (const [item, count] of getUses(recipe)) {
            while ((inventory[item] ?? 0) < count) {
                craft(item)
            }
            inventory[item]! -= count
            if (inventory[item] === 0) {
                delete inventory[item]
            }
        }

        collect(item)
        for (const [item, count] of getReturns(recipe)) {
            collect(item, count)
        }
    } else {
        collect(item)
    }
}

const benches: CraftedItems[] = [
    'workbench_29',
    'tool_bench_7',
    'campfire_2',
    'craft_bench_7',
    'woodwork_bench',
    'tailors_bench_2',
    'kiln_2',
    'furnace_3',
    'press_7',
    'compost_bench',
    'armor_bench_3',
    'easel_3',
    'builders_bench_2',
    'metalwork_bench_6',
    'pizza_oven',
    'train_yard',
    'mixing_bench_3',
    'dye_bench_3',
    'steam_generator',
    'electric_kiln',
    'electric_furnace',
    'electric_press',
    'electric_stove',
    'electric_metalwork_bench',
    'flywheel',
    'electric_sluice',
    'egg_extractor',
    'solar_panel',
    'refinery',
    'shop'
]

function niceName(name: string) {
    return name.replace(
        /^(.)|_(.)/g,
        (s, c1, c2) => (s.startsWith('_') ? ' ' : '') + (c1 || c2).toLocaleUpperCase()
    );
}

function printMap(items: MaterialMap) {
    console.log('| Item | Count |');
    console.log('| --- | --- |');
    for (const [k, v] of Object.entries(items).sort((a, b) => a[0].localeCompare(b[0]))) {
        console.log(`| ${niceName(k)} | ${v} |`);
    }
}

// Be sure to specifically craft electric benches first if crafting higher level items
// or they won't be prioritized and you will require more resources (especially black sand!)

// for (const item of benches) {
//     inventory[item] = 1
// }
craft('tool_bench_6')
// console.log('Inventory', inventory)
// console.log('Collected', collected)
// console.log('Raw', getRawMaterials(collected))

const raw = getRawMaterials(collected)
printMap(raw)
