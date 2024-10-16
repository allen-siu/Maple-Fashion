import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum ModalType {
    NONE,
    LOGIN,
    REGISTER,
    MY_AVATARS
}

export interface ModalState {
    currentModal: ModalType
}


const modalInitialState: ModalState = {
    currentModal: ModalType.NONE
}

export const modalSlice = createSlice({
    name: "modal",
    initialState: modalInitialState,
    reducers: {
        changeModal: (state, action: PayloadAction<ModalType>) => {
            state.currentModal = action.payload
        },
    }
})

export const { changeModal } = modalSlice.actions
export default modalSlice.reducer
