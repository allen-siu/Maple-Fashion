import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CosmeticCategory, Equip, Inventory, Hair, Face, Cosmetic } from "../storeTypes"

export interface ClosetState {
    currentCategory: CosmeticCategory,
    equipInventory: Inventory
}

const closetInitialState: ClosetState = {
    currentCategory: CosmeticCategory.HAIR,
    equipInventory: {
        [CosmeticCategory.HAIR]: [],
        [CosmeticCategory.FACE]: [],
        [CosmeticCategory.WEAPON]: [],
        [CosmeticCategory.HAT]: [],
        [CosmeticCategory.TOP]: [],
        [CosmeticCategory.BOTTOM]: [],
        [CosmeticCategory.OVERALL]: [],
        [CosmeticCategory.SHOES]: [],
        [CosmeticCategory.CAPE]: [],
        [CosmeticCategory.GLOVES]: [],
        [CosmeticCategory.FACE_ACCESSORY]: [],
        [CosmeticCategory.EYE_ACCESSORY]: [],
        [CosmeticCategory.EARRINGS]: [],
        [CosmeticCategory.RING]: []
    }
}

export interface UpdatedClosetPayload {
    category: CosmeticCategory,
    cosmetics: Cosmetic[]
}

export const closetSlice = createSlice({
    name: "closet",
    initialState: closetInitialState,
    reducers: {
        changeCategory: (state, action: PayloadAction<CosmeticCategory>) => {
            state.currentCategory = action.payload;
        },
        updateInventory: (state, action: PayloadAction<UpdatedClosetPayload>) => {
            const category = action.payload.category;
            const cosmetics = action.payload.cosmetics;
            state.equipInventory = {...state.equipInventory, [category]: cosmetics}
        }
    }
});
export const { changeCategory, updateInventory } = closetSlice.actions
export default closetSlice.reducer;

