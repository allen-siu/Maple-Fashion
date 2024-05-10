import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Equip, Skin } from "../storeTypes"

export interface AvatarState {
    skin: string,
    faceId: number,
    hairId: number,
    pose: string,
    poseFrame: number,
    faceEmote: string,
    faceFrame: number,
    ears: string,
    itemIds: Equip[],
    effectFrame: number
}

const avatarInitialState: AvatarState = {
    "skin": Skin.LIGHT,
    "faceId": 20000,
    "hairId": 30000,
    "pose": "standingOneHanded",    //
    "poseFrame": 1,                 //
    "faceEmote": "default",         //  These values typically won't be changed
    "faceFrame": 0,                 //
    "ears": "humanEars",            //
    "itemIds": [],
    "effectFrame": 0                //  
}

export const avatarSlice = createSlice({
    name: "avatar",
    initialState: avatarInitialState,
    reducers: {
        changeSkin: (state, action: PayloadAction<string>) => {
            state.skin = action.payload
        },
        changeFace: (state, action: PayloadAction<number>) => {
            state.faceId = action.payload
        },
        changeHair: (state, action: PayloadAction<number>) => {
            state.hairId = action.payload
        },
        changeEquip: (state, action: PayloadAction<any>) => {
            // TODO
        },
        removeEquip: (state, action: PayloadAction<any>) => {
            // TODO
        }
    }
});
export const { changeSkin, changeFace, changeHair, changeEquip, removeEquip } = avatarSlice.actions
export default avatarSlice.reducer;

