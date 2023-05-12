import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: 'Изначальное значение',
    },
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload
        },
    },
});

export const { setUsername } = userSlice.actions;
