import { createSlice } from '@reduxjs/toolkit';

export const statsSlice = createSlice({
    name: 'stats',
    initialState: {
        played: 0,
        correct: 0,
        wrong: 0,
        points: 0,
    },
    reducers: {
        stats: (state, action) => {
            state.stats = action.payload;
        },
    },
});

export const { setStats } = statsSlice.actions;
