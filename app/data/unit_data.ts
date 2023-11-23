import { ALLEGIANCE, FACTION, UNIT_DATASHEET, UNIT_TYPE } from "../types";

// astartes 1000-1999, solar 2000-2999, knights-titans 4000-4999

export const unitData: UNIT_DATASHEET[] = [
  // ********************************************************************
  // *************************ASTARTES UNITS ****************************
  // ********************************************************************
  {
    id: 1000,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.infantry, value: 1 },
    name: "Command Squad",
    movement: 5,
    save: 4,
    caf: 4,
    morale: 2,
    wounds: 1,
    weapons: [1000],
    special_rules: [
      "Commander",
      'Inspire (5")',
      "Invulnerable Save (6+)",
      "Master Tactitian",
      "Medicae",
    ],
  },
  {
    id: 1001,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
    name: "Rhino",
    movement: 9,
    save: 4,
    caf: 0,
    morale: 3,
    wounds: 1,
    weapons: [1001, 1002, 1003],
    special_rules: ["Transport (2)"],
  },
  {
    id: 1002,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.infantry, value: 1 },
    name: "Tactical Legionaries",
    movement: 5,
    save: 5,
    caf: 2,
    morale: 3,
    wounds: 1,
    weapons: [1004, 1005, 1006],
    special_rules: [],
  },
  {
    id: 1003,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.infantry, value: 1 },
    name: "Legion Terminators",
    movement: 5,
    save: 4,
    caf: 4,
    morale: 3,
    wounds: 1,
    weapons: [1000],
    special_rules: [
      "Bulky",
      "Deep Strike",
      "Implacable",
      "Invulnerable Save (6+)",
      "Steadfast",
    ],
  },
  {
    id: 1004,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.infantry, value: 1 },
    name: "Assault Marines",
    movement: 7,
    save: 5,
    caf: 3,
    morale: 3,
    wounds: 1,
    weapons: [1007],
    special_rules: ["Independant", "Jump Packs"],
  },
  {
    id: 1005,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.infantry, value: 1 },
    name: "Support Legionaries (plasma)",
    movement: 5,
    save: 5,
    caf: 2,
    morale: 3,
    wounds: 1,
    weapons: [1005],
    special_rules: [],
  },
  {
    id: 1006,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.infantry, value: 1 },
    name: "Support Legionaries (missile)",
    movement: 5,
    save: 5,
    caf: 1,
    morale: 3,
    wounds: 1,
    weapons: [1006],
    special_rules: [],
  },
  {
    id: 1007,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.infantry, value: 1 },
    name: "Legion Rapier",
    movement: 4,
    save: 5,
    caf: 1,
    morale: 3,
    wounds: 1,
    weapons: [1008, 1009],
    special_rules: ["Bulky"],
  },
  {
    id: 1008,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.walker, value: 1 },
    name: "Leviathan Dreadnought",
    movement: 5,
    save: 4,
    caf: 5,
    morale: 3,
    wounds: 1,
    weapons: [1010, 1011, 1012, 1013],
    special_rules: ["Armoured", "Invunerable Save (5+)"],
  },
  {
    id: 1009,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.walker, value: 1 },
    name: "Contemptor Dreadnought",
    movement: 5,
    save: 4,
    caf: 5,
    morale: 3,
    wounds: 1,
    weapons: [1014, 1015, 1016],
    special_rules: ["Armoured", "Invunerable Save (6+)"],
  },
  {
    id: 1010,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.infantry, value: 1 },
    name: "Legion Tarantula Battery",
    movement: 0,
    save: 5,
    caf: -3,
    morale: null,
    wounds: 1,
    weapons: [1017, 1018],
    special_rules: ["Automated Sentry"],
  },
  {
    id: 1011,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.walker, value: 1 },
    name: "Deredeo Dreadnought",
    movement: 5,
    save: 4,
    caf: 2,
    morale: 3,
    wounds: 1,
    weapons: [1019, 1020, 1021, 1022],
    special_rules: ["Armoured", "Invunerable Save (5+)", "Tracking Array"],
  },
  {
    id: 1012,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
    name: "Legion Predator",
    movement: 9,
    save: 3,
    caf: 2,
    morale: 3,
    wounds: 1,
    weapons: [1023, 1024, 1025, 1026],
    special_rules: [],
  },
  {
    id: 1013,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
    name: "Legion Sicaran",
    movement: 10,
    save: 3,
    caf: 2,
    morale: 3,
    wounds: 1,
    weapons: [1027, 1028, 1029, 1024, 1026],
    special_rules: [],
  },
  {
    id: 1014,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
    name: "Legion Kratos",
    movement: 8,
    save: 3,
    caf: 2,
    morale: 3,
    wounds: 2,
    weapons: [1030, 1031, 1032, 1027, 1024, 1026, 1033, 1034],
    special_rules: [],
  },
  {
    id: 1015,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
    name: "Xiphon Interceptor",
    movement: 30,
    save: 3,
    caf: 0,
    morale: null,
    wounds: 1,
    weapons: [1035, 1036],
    special_rules: ["Flyer", "Interceptor", "Jink (5+)"],
  },
  {
    id: 1016,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
    name: "Storm Eagle",
    movement: 25,
    save: 3,
    caf: 0,
    morale: null,
    wounds: 1,
    weapons: [1037, 1038, 1039, 1040],
    special_rules: ["Assault Transport (5)", "Flyer", "Hover", "Jink (5+)"],
  },
  {
    id: 1017,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
    name: "Fire Raptor",
    movement: 25,
    save: 3,
    caf: 0,
    morale: null,
    wounds: 1,
    weapons: [1041, 1039, 1042, 1043, 1044],
    special_rules: ["Flyer", "Hover", "Jink (5+)"],
  },
  {
    id: 1018,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
    name: "Thunderhawk Gunship",
    movement: 25,
    save: 2,
    caf: 0,
    morale: null,
    wounds: 2,
    weapons: [1045, 1046, 1047, 1048],
    special_rules: [
      "Flyer",
      "Hover",
      "Jink (5+)",
      "Large Assault Transport (8)",
    ],
  },
  // ********************************************************************
  // ************************* SOLAR AUXILIA UNITS **********************
  // ********************************************************************
  {
    id: 2000,
    faction: FACTION.solar,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.infantry, value: 1 },
    name: "Auxilia Commander",
    movement: 5,
    save: 6,
    caf: 3,
    morale: 2,
    wounds: 1,
    weapons: [2000, 2001],
    special_rules: [
      "Commander",
      'Inspire (8")',
      "Invulnerable Save (6+)",
      "Master Tactitian",
      'Solar Auxilia HQ (10")',
    ],
  },
  {
    id: 2001,
    faction: FACTION.solar,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.infantry, value: 1 },
    name: "Tactical Command",
    movement: 5,
    save: 6,
    caf: 1,
    morale: 3,
    wounds: 1,
    weapons: [2002],
    special_rules: ["Commander", 'Inspire (8")', 'Solar Auxilia HQ (6")'],
  },
  {
    id: 2002,
    faction: FACTION.solar,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.infantry, value: 1 },
    name: "Auxiliaries",
    movement: 5,
    save: 6,
    caf: 0,
    morale: 4,
    wounds: 1,
    weapons: [2002, 2003],
    special_rules: ["Chain of Command", "Line"],
  },
  {
    id: 2003,
    faction: FACTION.solar,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.infantry, value: 1 },
    name: "Veletarii",
    movement: 5,
    save: 6,
    caf: 1,
    morale: 4,
    wounds: 1,
    weapons: [2004, 2005],
    special_rules: ["Independant", "Line"],
  },
  {
    id: 2004,
    faction: FACTION.solar,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.infantry, value: 1 },
    name: "Charonite Ogryns",
    movement: 5,
    save: 6,
    caf: 3,
    morale: 4,
    wounds: 1,
    weapons: [2006],
    special_rules: ["Furious Charge", "Independant"],
  },
  {
    id: 2005,
    faction: FACTION.solar,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.infantry, value: 1 },
    name: "Auxilia Rapier",
    movement: 4,
    save: 6,
    caf: 0,
    morale: 4,
    wounds: 1,
    weapons: [1008, 1009, 2007],
    special_rules: ["Bulky", "Chain of Command"],
  },
  {
    id: 2006,
    faction: FACTION.solar,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.infantry, value: 1 },
    name: "Auxilia Tarantula",
    movement: 0,
    save: 5,
    caf: -3,
    morale: null,
    wounds: 1,
    weapons: [1017, 1018],
    special_rules: ["Automated Sentry"],
  },
  {
    id: 2007,
    faction: FACTION.solar,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.walker, value: 1 },
    name: "Aethon Heavy Sentinel",
    movement: 7,
    save: 4,
    caf: 0,
    morale: 4,
    wounds: 1,
    weapons: [2008, 2009],
    special_rules: ["Forward Deployment"],
  },
  {
    id: 2008,
    faction: FACTION.solar,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
    name: "Leman Russ",
    movement: 8,
    save: 2,
    caf: 2,
    morale: 4,
    wounds: 1,
    weapons: [2010, 2011, 1027, 2012],
    special_rules: ["Chain of Command", "Explorator Adaptation"],
  },
  {
    id: 2009,
    faction: FACTION.solar,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
    name: "Malcador Tank",
    movement: 9,
    save: 3,
    caf: 2,
    morale: 4,
    wounds: 2,
    weapons: [2013, 2014, 2015, 2016, 2017, 2018, 1027, 2012, 2019, 2020],
    special_rules: ["Chain of Command", "Explorator Adaptation"],
  },
  {
    id: 2010,
    faction: FACTION.solar,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.heavy, value: 3 },
    name: "Auxilia Super Heavy",
    movement: 7,
    save: 2,
    caf: 4,
    morale: 4,
    wounds: 2,
    weapons: [2021, 2022, 1031, 2020, 1027, 2023, 2024, 2025, 2026],
    special_rules: ["Chain of Command", "Explorator Adaptation"],
  },
  {
    id: 2011,
    faction: FACTION.solar,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
    name: "Thunderbolt Fighter",
    movement: 25,
    save: 4,
    caf: 0,
    morale: null,
    wounds: 1,
    weapons: [2027, 2028, 2029, 2030, 2031, 2032],
    special_rules: ["Flyer", "Interceptor", "Jink (5+)"],
  },
  {
    id: 2012,
    faction: FACTION.solar,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
    name: "Avenger Strike Fighter",
    movement: 28,
    save: 4,
    caf: 0,
    morale: null,
    wounds: 1,
    weapons: [2029, 2033, 2034, 2035, 2030, 2031, 2032],
    special_rules: ["Flyer", "Interceptor", "Jink (5+)"],
  },
  {
    id: 2013,
    faction: FACTION.solar,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
    name: "Lightning Fighter",
    movement: 30,
    save: 4,
    caf: 0,
    morale: null,
    wounds: 1,
    weapons: [2036, 2037, 2030, 2031, 2038],
    special_rules: ["Flyer", "Interceptor", "Jink (5+)"],
  },
  {
    id: 2014,
    faction: FACTION.solar,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
    name: "Marauder Bomber",
    movement: 24,
    save: 3,
    caf: 0,
    morale: null,
    wounds: 1,
    weapons: [2039, 2040, 2041, 2030, 2031, 2032],
    special_rules: ["Flyer", "Jink (5+)"],
  },
  {
    id: 2015,
    faction: FACTION.solar,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
    name: "Marauder Pathfinder",
    movement: 22,
    save: 3,
    caf: 0,
    morale: null,
    wounds: 1,
    weapons: [2042, 2043],
    loadout: [
      {
        options: [
          "Nose Mounted heavy bolter",
          "Rear Mounted heavy bolter",
          "Any two of the following: Hellstrike missiles, Skystrike missiles or Wing bombs",
        ],
      },
    ],
    special_rules: ["Auger Array", "Flyer", "Jink (5+)"],
  },
  {
    id: 2016,
    faction: FACTION.solar,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
    name: "Marauder Colossus",
    movement: 22,
    save: 3,
    caf: 0,
    morale: null,
    wounds: 1,
    weapons: [2042, 2043, 2044],
    loadout: [
      {
        options: [
          "Nose Mounted heavy bolter",
          "Rear Mounted heavy bolter",
          "Colossus bomb",
          "Any two of the following: Hellstrike missiles, Skystrike missiles or Wing bombs",
        ],
      },
    ],
    special_rules: ["Flyer", "Jink (5+)"],
  },
  {
    id: 2017,
    faction: FACTION.solar,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
    name: "Marauder Destroyer",
    movement: 24,
    save: 3,
    caf: 0,
    morale: null,
    wounds: 1,
    weapons: [2045, 2040, 2046, 2047],
    loadout: [
      {
        options: [
          "Nose Mounted autocannon array",
          "Marauder heavy bolter turrets",
          "Marauder assault cannons",
          "Destroyer bomb bay",
          "Any two of the following: Hellstrike missiles, Skystrike missiles or Wing bombs",
        ],
      },
    ],
    special_rules: ["Flyer", "Jink (5+)"],
  },
  {
    id: 2018,
    faction: FACTION.solar,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
    name: "Arvus Lighter",
    movement: 25,
    save: 4,
    caf: 0,
    morale: null,
    wounds: 1,
    weapons: [],
    special_rules: ["Flyer", "Hover", "Jink (5+)", "Transport (2)"],
  },

  // ********************************************************************
  // ************************** KNIGHT TITAN UNITS **********************
  // ********************************************************************
  {
    id: 4000,
    faction: FACTION.strategic,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.knight, value: 4 },
    name: "Questoris Knight",
    movement: 8,
    save: 3,
    caf: 8,
    morale: 2,
    wounds: 3,
    weapons: [4000, 4001, 4002, 4003, 4004, 4005, 4006, 4007],
    special_rules: ["Independant", "Ion Shields (4+)", "Nimble"],
  },
  {
    id: 4001,
    faction: FACTION.strategic,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.knight, value: 4 },
    name: "Knight Styrix",
    movement: 8,
    save: 3,
    caf: 8,
    morale: 2,
    wounds: 3,
    weapons: [4008, 4009, 4010],
    special_rules: [
      "Blessed Auto-simulacra",
      "Independant",
      "Ionic Flare Shield",
      "Ion Shields (4+)",
      "Nimble",
    ],
  },
  {
    id: 4002,
    faction: FACTION.strategic,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.knight, value: 4 },
    name: "Knight Magaera",
    movement: 8,
    save: 3,
    caf: 8,
    morale: 2,
    wounds: 3,
    weapons: [4008, 4009, 4010],
    special_rules: [
      "Blessed Auto-simulacra",
      "Independant",
      "Ionic Flare Shield",
      "Ion Shields (4+)",
      "Nimble",
    ],
  },
  {
    id: 4003,
    faction: FACTION.strategic,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.knight, value: 4 },
    name: "Questoris Knight Armiger",
    movement: 8,
    save: 3,
    caf: 6,
    morale: 2,
    wounds: 2,
    weapons: [4014, 4015, 4016],
    special_rules: ["Ion Shields (5+)", "Nimble"],
  },
  {
    id: 4004,
    faction: FACTION.strategic,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.knight, value: 4 },
    name: "Mechanicum Knight Moirax",
    movement: 8,
    save: 3,
    caf: 6,
    morale: 2,
    wounds: 2,
    weapons: [4017, 4018, 4019],
    special_rules: ["Ionic Flare Shield", "Ion Shields (5+)", "Nimble"],
  },
  {
    id: 4005,
    faction: FACTION.strategic,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.knight, value: 4 },
    name: "Acastus Knight",
    movement: 8,
    save: 3,
    caf: 7,
    morale: 2,
    wounds: 2,
    weapons: [4020, 4021, 4022, 4023, 4024, 4025, 4026, 4027],
    special_rules: [
      "Blessed Auto-simulacra",
      "Independant",
      "Ion Shields (4+)",
    ],
  },
  {
    id: 4006,
    faction: FACTION.strategic,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.titan, value: 5 },
    name: "Warhound Titan",
    movement: 7,
    save: 2,
    caf: 10,
    morale: null,
    wounds: 4,
    weapons: [
      4028, 4029, 4030, 4031, 4032, 4033, 4034, 4035, 4036, 4037, 4038, 4039,
    ],
    special_rules: ["Agile", "Void Shields (2)"],
  },
  {
    id: 4007,
    faction: FACTION.strategic,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.titan, value: 5 },
    name: "Dire Wolf Titan",
    movement: 7,
    save: 2,
    caf: 10,
    morale: null,
    wounds: 4,
    weapons: [4040, 4041, 4042, 4040],
    special_rules: ["Agile", "Infiltrate", "Void Shields (2)"],
  },
  {
    id: 4008,
    faction: FACTION.strategic,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.titan, value: 5 },
    name: "Reaver Battle Titan",
    movement: 6,
    save: 2,
    caf: 12,
    morale: null,
    wounds: 5,
    weapons: [
      4044, 4045, 4046, 4047, 4048, 4049, 4050, 4051, 4052, 4053, 4054, 4055,
      4056,
    ],
    special_rules: ["Void Shields (4)"],
  },
  {
    id: 4009,
    faction: FACTION.strategic,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.titan, value: 5 },
    name: "Warbringer Nemesis Titan",
    movement: 5,
    save: 2,
    caf: 12,
    morale: null,
    wounds: 5,
    weapons: [4044, 4045, 4046, 4047, 4057, 4058, 4059, 4060],
    special_rules: ["Void Shields (6)"],
  },
  {
    id: 4010,
    faction: FACTION.strategic,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.titan, value: 5 },
    name: "Warlord Battle Titan",
    movement: 5,
    save: 2,
    caf: 14,
    morale: null,
    wounds: 6,
    weapons: [
      4058, 4061, 4062, 4057, 4063, 4072, 4064, 4065, 4066, 4067, 4068, 4059,
      4069, 4070, 4071,
    ],
    special_rules: ["Void Shields (6)"],
  },
  {
    id: 4011,
    faction: FACTION.strategic,
    allegiance: ALLEGIANCE.loyalist,
    unit_type: { type: UNIT_TYPE.titan, value: 5 },
    name: "Warlord-Sinister",
    movement: 5,
    save: 2,
    caf: 14,
    morale: null,
    wounds: 6,
    weapons: [
      4073, 4058, 4061, 4062, 4057, 4063, 4072, 4063, 4064, 4065, 4066, 4067,
      4068, 4059, 4069, 4070, 4071, 4074, 4075,
    ],
    special_rules: [
      "Dread Aura",
      "Loyalist",
      "Necrotechia",
      "Void Shields (6)",
    ],
  },
  {
    id: 4012,
    faction: FACTION.strategic,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.titan, value: 5 },
    name: "Warmaster Titan",
    movement: 5,
    save: 1,
    caf: 18,
    morale: null,
    wounds: 7,
    weapons: [
      4076, 4077, 4030, 4078, 4028, 1045, 4031, 4079, 4059, 4069, 4080, 4081,
    ],
    special_rules: ["Void Shields (12)"],
  },
  {
    id: 4013,
    faction: FACTION.strategic,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.titan, value: 5 },
    name: "Warmaster Iconoclast",
    movement: 6,
    save: 1,
    caf: 18,
    morale: null,
    wounds: 7,
    weapons: [
      4082, 4083, 4084, 4085, 4030, 4078, 4028, 1045, 4031, 4079, 4059, 4069,
      4080, 4081,
    ],
    special_rules: ["Void Shields (12)"],
  },
];
