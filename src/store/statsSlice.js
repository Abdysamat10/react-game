import { createSlice } from '@reduxjs/toolkit';

export const statsSlice = createSlice({
    name: 'stats',
    initialState: {
        played: 1,
        correct: 2,
        wrong: 3,
        points: 4,
    },
    reducers: {
        stats: (state, action) => {
            state.stats = action.payload;
        },
    },
});

export const { setStats } = statsSlice.actions;
