export enum CosmeticCategory {
    SKIN = "Skin",
    HAIR = "Hair",
    FACE = "Face",
    WEAPON = "Weapon",
    HAT = "Hat",
    TOP = "Top",
    BOTTOM = "Bottom",
    OVERALL = "Overall",
    SHOES = "Shoes",
    CAPE = "Cape",
    GLOVES = "Glove",
    FACE_ACCESSORY = "Face Accessory",
    EYE_ACCESSORY = "Eye Decoration",
    EARRINGS = "Earrings",
    RING = "Ring"
}

export interface Cosmetic {
    name: string,
    icon: string,
    gender: string
    cosmeticCategory: CosmeticCategory
}

export interface Equip extends Cosmetic {
    itemId: number,
    subcategory: string,
}

export interface Hair extends Cosmetic {
    hairId: number
}

export interface Face extends Cosmetic {
    faceId: number
}

export interface Inventory {
    [CosmeticCategory.HAIR]: Hair[];
    [CosmeticCategory.FACE]: Face[];
    [CosmeticCategory.WEAPON]: Equip[];
    [CosmeticCategory.HAT]: Equip[];
    [CosmeticCategory.TOP]: Equip[];
    [CosmeticCategory.BOTTOM]: Equip[];
    [CosmeticCategory.OVERALL]: Equip[];
    [CosmeticCategory.SHOES]: Equip[];
    [CosmeticCategory.CAPE]: Equip[];
    [CosmeticCategory.GLOVES]: Equip[];
    [CosmeticCategory.FACE_ACCESSORY]: Equip[];
    [CosmeticCategory.EYE_ACCESSORY]: Equip[];
    [CosmeticCategory.EARRINGS]: Equip[];
    [CosmeticCategory.RING]: Equip[];
}

export enum Skin {
    LIGHT = "light",
    ASHEN = "ashen",
    PALE_PINK = "palePink",
    TANNED = "tanned",
    PALE = "pale",
    GREEN = "green",
    GHOSTLY = "ghostly",
    DARK = "dark",
    CLAY = "clay",
    WHITE = "white",
    MERCEDES = "mercedes",
    SOFT_PETAL = "softPetal",
    BLUSHING_PETAL = "blushingPetal"
}


