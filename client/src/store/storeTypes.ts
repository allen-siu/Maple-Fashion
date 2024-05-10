export enum EquipCategory {
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

export interface Equip {
    name: string,
    subcategory: string,
    itemId: number,
    icon?: string
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
