import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CosmeticCategory, Equip, Face, Hair, Skin } from "../storeTypes"

// export interface AvatarState {
//     skin: string,
//     faceId: number,
//     hairId: number,
//     pose: string,
//     poseFrame: number,
//     faceEmote: string,
//     faceFrame: number,
//     ears: string,
//     itemIds: Equip[],
//     effectFrame: number
// }

// const avatarInitialState: AvatarState = {
//     "skin": Skin.LIGHT,
//     "faceId": 20000,
//     "hairId": 30000,
//     "pose": "standingOneHanded",    //
//     "poseFrame": 1,                 //
//     "faceEmote": "default",         //  These values typically won't be changed
//     "faceFrame": 0,                 //
//     "ears": "humanEars",            //
//     "itemIds": [],
//     "effectFrame": 0                //  
// }

export interface AvatarState {
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

const avatarInitialState: AvatarState = {
    [CosmeticCategory.SKIN]: Skin.LIGHT,
    [CosmeticCategory.HAIR]: null,
    [CosmeticCategory.FACE]: null,
    [CosmeticCategory.WEAPON]: null,
    [CosmeticCategory.HAT]: null,
    [CosmeticCategory.TOP]: null,
    [CosmeticCategory.BOTTOM]: null,
    [CosmeticCategory.OVERALL]: null,
    [CosmeticCategory.SHOES]: null,
    [CosmeticCategory.CAPE]: null,
    [CosmeticCategory.GLOVES]: null,
    [CosmeticCategory.FACE_ACCESSORY]: null,
    [CosmeticCategory.EYE_ACCESSORY]: null,
    [CosmeticCategory.EARRINGS]: null,
    [CosmeticCategory.RING]: null,
}


export const avatarSlice = createSlice({
    name: "avatar",
    initialState: avatarInitialState,
    reducers: {
        removeEquip: (state, action: PayloadAction<CosmeticCategory>) => {
            state[action.payload] = null
        },
        changeSkin: (state, action: PayloadAction<Skin>) => {
            state[CosmeticCategory.SKIN] = action.payload
        },
        changeFace: (state, action: PayloadAction<Face>) => {
            state[CosmeticCategory.FACE] = action.payload
        },
        changeHair: (state, action: PayloadAction<Hair>) => {
            state[CosmeticCategory.HAIR] = action.payload
        },
        changeWeapon: (state, action: PayloadAction<Equip>) => {
            state[CosmeticCategory.WEAPON] = action.payload
        },
        changeHat: (state, action: PayloadAction<Equip>) => {
            state[CosmeticCategory.HAT] = action.payload
        },
        changeTop: (state, action: PayloadAction<Equip>) => {
            state[CosmeticCategory.TOP] = action.payload
            state[CosmeticCategory.OVERALL] = null
        },
        changeBottom: (state, action: PayloadAction<Equip>) => {
            state[CosmeticCategory.BOTTOM] = action.payload
            state[CosmeticCategory.OVERALL] = null
        },
        changeOverall: (state, action: PayloadAction<Equip>) => {
            state[CosmeticCategory.TOP] = null
            state[CosmeticCategory.BOTTOM] = null
            state[CosmeticCategory.OVERALL] = action.payload
        },
        changeShoes: (state, action: PayloadAction<Equip>) => {
            state[CosmeticCategory.SHOES] = action.payload
        },
        changeCape: (state, action: PayloadAction<Equip>) => {
            state[CosmeticCategory.CAPE] = action.payload
        },
        changeGloves: (state, action: PayloadAction<Equip>) => {
            state[CosmeticCategory.GLOVES] = action.payload
        },
        changeFaceAccessory: (state, action: PayloadAction<Equip>) => {
            state[CosmeticCategory.FACE_ACCESSORY] = action.payload
        },
        changeEyeAccessory: (state, action: PayloadAction<Equip>) => {
            state[CosmeticCategory.EYE_ACCESSORY] = action.payload
        },
        changeEarrings: (state, action: PayloadAction<Equip>) => {
            state[CosmeticCategory.EARRINGS] = action.payload
        },
        changeRing: (state, action: PayloadAction<Equip>) => {
            state[CosmeticCategory.RING] = action.payload
        }
    }
});
export const { changeSkin, changeFace, changeHair, changeHat, changeTop, changeBottom,
                changeOverall, changeShoes, changeCape, changeGloves, changeFaceAccessory,
                changeEyeAccessory, changeEarrings,changeRing, changeWeapon, removeEquip } = avatarSlice.actions
export default avatarSlice.reducer;

