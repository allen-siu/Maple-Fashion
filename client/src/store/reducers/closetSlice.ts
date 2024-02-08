import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EquipCategory, Equip } from "../storeTypes"

interface ClosetState {
    category: EquipCategory,
    equipsDisplayed: Equip[]
}

const closetInitialState: ClosetState = {
    category: EquipCategory.HAT,
    equipsDisplayed: []
}

export const closetSlice = createSlice({
    name: "closet",
    initialState: closetInitialState,
    reducers: {
        changeCategory: (state, action: PayloadAction<ClosetState>) => {
            state.category = action.payload.category;
            state.equipsDisplayed = action.payload.equipsDisplayed;
        }
    }
});
export const { changeCategory } = closetSlice.actions
export default closetSlice.reducer;

