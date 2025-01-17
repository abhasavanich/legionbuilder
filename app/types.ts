export enum FACTION {
  astartes = "Legiones Astartes",
  solar = "Solar Auxillia",
  strategic = "Strategic Assets",
}

export const factionTypeArray = Object.values(FACTION);

export enum ALLEGIANCE {
  loyalist = "Loyalist",
  traitor = "Traitor",
  neutral = "Neutral",
}

export enum DETACHMENT_TYPE {
  hq = "HQ",
  core = "Core",
  support = "Support",
  vanguard = "Vanguard",
  light = "Light Armour",
  battle = "Battle Tank",
  heavy = "Heavy Armour",
  artillery = "Artillery",
  air = "Air Support",
  bastion = "Bastion",
  transport = "Transport",
  titan = "Titan",
  knight = "Knight",
}

export enum UNIT_TYPE {
  knight = "Knight",
  infantry = "Infantry",
  walker = "Walker",
  titan = "Titan",
  vehicle = "Vehicle",
  heavy = "Super-Heavy Vehicle",
}

export const detachmentTypeArray = Object.values(DETACHMENT_TYPE);

export enum SLOTSET {
  compulsory = "compulsory",
  optional = "optional",
  choice = "choice",
}

export interface FORMATION {
  id: number;
  name: string;
  faction: FACTION;
  allegiance: ALLEGIANCE;
  compulsory: number[] | null;
  optional: number[] | null;
  choice: number[][] | null;
}

export interface FORMATION_SLOT {
  id: number;
  type: DETACHMENT_TYPE;
  restricted?: boolean;
  options: number[];
  description?: string;
}

export interface DETACHMENT {
  id: number;
  name: string;
  faction: FACTION;
  allegiance: ALLEGIANCE;
  unique?: boolean;
  detachment_type: DETACHMENT_TYPE;
  base_cost: number;
  base_size: number;
  max_size: number;
  main_unit: number[];
  related_unit: number[];
  loadout: DETACHMENT_LOADOUT[];
  upgrade_options: DETACHMENT_UPGRADE[];
  datasheet_info: DETACHMENT_UPGRADE_DATASHEET[];
}

export interface DETACHMENT_LOADOUT {
  text?: string;
  text_option?: string[];
  weapon_option?: number[];
  itallic_text?: string;
}

export interface DETACHMENT_UPGRADE {
  name: string;
  options: { number: number; cost: number; size: number; text?: string }[];
}

export interface DETACHMENT_UPGRADE_DATASHEET {
  text?: string;
  options?: { text: string; cost: number }[];
  info?: string;
}

export interface UNIT_DATASHEET {
  id: number;
  faction: FACTION;
  allegiance: ALLEGIANCE;
  unit_type: { type: UNIT_TYPE; value: number };
  name: string;
  movement: number;
  save: number;
  caf: number;
  morale: number | null;
  wounds: number;
  weapons: number[];
  loadout?: [{ text?: string; options?: string[] }];
  special_rules: SPECIAL_RULE[];
}

export interface WEAPON_DATASHEET {
  id: number;
  name: string;
  profiles: {
    range: string;
    dice: number | string | null;
    to_hit: number | null;
    ap: number | string;
    traits: WEAPON_TRAIT[];
  }[];
}

export interface WEAPON_TRAIT {
  name: string;
  value?: number | string;
}

export interface SPECIAL_RULE {
  name: string;
  value?: number | string;
}

// List builder specific types ( effectively mirrors of above types)

export interface BUILDER_LIST {
  points: number;
  main_faction: FACTION;
  formations: BUILDER_FORMATION[];
}

export interface BUILDER_FORMATION {
  name: string;
  ref_id: string;
  id: number;
  faction: FACTION | null;
  choice: BUILDER_DETACHMENT_SLOT[][] | null;
  compulsory: BUILDER_DETACHMENT_SLOT[] | null;
  optional: BUILDER_DETACHMENT_SLOT[] | null;
}

export interface BUILDER_DETACHMENT_SLOT {
  ref_id: string;
  slot_ref: string;
  id: number;
  type: DETACHMENT_TYPE;
  restricted?: boolean;
  options: number[];
  description?: string;
  selected_unit: BUILDER_DETACHMENT_UNIT | null;
}

export interface BUILDER_DETACHMENT_UNIT {
  id: number;
  name: string;
  base_cost: number;
  base_size: number;
  max_size: number;
  upgrade_options: BUILDER_DETACHMENT_UNIT_UPGRADES[];
}

export interface BUILDER_DETACHMENT_UNIT_UPGRADES {
  name: string;
  number: number;
  cost: number;
  size: number;
  text?: string;
}

// CONTACT FORM

export interface CONTACT_FORM_DATA {
  email: string;
  title: string;
  message: string;
}
