import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './userSlice';
import { statsSlice } from './statsSlice';

export const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
        [statsSlice.name]: statsSlice.reducer,
    },
});
