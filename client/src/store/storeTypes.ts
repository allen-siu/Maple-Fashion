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
