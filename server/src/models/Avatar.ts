import mongoose, { mongo } from "mongoose";
import { Schema } from "mongoose";

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

export interface Avatar {
    name: string,
    [CosmeticCategory.SKIN]: Skin | null,
    [CosmeticCategory.HAIR]: Hair | null,
    [CosmeticCategory.FACE]: Face | null,
    [CosmeticCategory.WEAPON]: Equip | null,
    [CosmeticCategory.HAT]: Equip | null,
    [CosmeticCategory.TOP]: Equip | null,
    [CosmeticCategory.BOTTOM]: Equip | null,
    [CosmeticCategory.OVERALL]: Equip | null,
    [CosmeticCategory.SHOES]: Equip | null,
    [CosmeticCategory.CAPE]: Equip | null,
    [CosmeticCategory.GLOVES]: Equip | null,
    [CosmeticCategory.FACE_ACCESSORY]: Equip | null,
    [CosmeticCategory.EYE_ACCESSORY]: Equip | null,
    [CosmeticCategory.EARRINGS]: Equip | null,
    [CosmeticCategory.RING]: Equip | null
}

const cosmeticSchema = new Schema<Cosmetic>({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    cosmeticCategory: {
        type: String,
        required: true
    }
})

const equipSchema = new Schema<Equip>({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    cosmeticCategory: {
        type: String,
        required: true
    },
    itemId: {
        type: Number,
        required: false
    },
    subcategory: {
        type: String,
        required: false
    },
})

const hairSchema = new Schema<Hair>({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    cosmeticCategory: {
        type: String,
        required: true
    },
    hairId: {
        type: Number,
        required: false
    }
})

const faceSchema = new Schema<Face>({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    cosmeticCategory: {
        type: String,
        required: true
    },
    faceId: {
        type: Number,
        required: false
    }
})

const avatarSchema = new Schema<Avatar>({
    name: {
        type: String,
        required: true
    },
    [CosmeticCategory.SKIN]: {
        type: String,
        required: false
    },
    [CosmeticCategory.HAIR]: {
        type: hairSchema,
        required: false
    },
    [CosmeticCategory.FACE]: {
        type: faceSchema,
        required: false
    },
    [CosmeticCategory.WEAPON]: {
        type: equipSchema,
        required: false
    },
    [CosmeticCategory.HAT]: {
        type: equipSchema,
        required: false
    },
    [CosmeticCategory.TOP]: {
        type: equipSchema,
        required: false
    },
    [CosmeticCategory.BOTTOM]: {
        type: equipSchema,
        required: false
    },
    [CosmeticCategory.OVERALL]: {
        type: equipSchema,
        required: false
    },
    [CosmeticCategory.SHOES]: {
        type: equipSchema,
        required: false
    },
    [CosmeticCategory.CAPE]: {
        type: equipSchema,
        required: false
    },
    [CosmeticCategory.GLOVES]: {
        type: equipSchema,
        required: false
    },
    [CosmeticCategory.FACE_ACCESSORY]: {
        type: equipSchema,
        required: false
    },
    [CosmeticCategory.EYE_ACCESSORY]: {
        type: equipSchema,
        required: false
    },
    [CosmeticCategory.EARRINGS]: {
        type: equipSchema,
        required: false
    },
    [CosmeticCategory.RING]:{
        type: equipSchema,
        required: false
    }
});

const Avatar = mongoose.model('Avatar', avatarSchema);
export default Avatar;