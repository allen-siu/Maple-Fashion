import { configureStore } from '@reduxjs/toolkit'
import closetReducer from '../reducers/closetSlice';
import avatarReducer from '../reducers/avatarSlice';
import modalReducer from '../reducers/modalSlice'


const store = configureStore({
    reducer: {
        closet: closetReducer,
        avatar: avatarReducer,
        modal: modalReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;