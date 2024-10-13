import { configureStore } from '@reduxjs/toolkit'
import closetReducer from './reducers/closetSlice';
import avatarReducer from './reducers/avatarSlice';


const store = configureStore({
    reducer: {
        closet: closetReducer,
        avatar: avatarReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;