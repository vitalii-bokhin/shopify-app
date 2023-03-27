import { createSlice } from '@reduxjs/toolkit'
import formatDateToYearMonthDayDateString from './formatDateToYearMonthDayDateString';

export const today = new Date(new Date().setHours(0, 0, 0, 0));
export const yesterday = new Date(new Date(new Date().setDate(today.getDate() - 1)).setHours(0, 0, 0, 0));

const initialState = {
    blocks: {},
};

export const blocksSlice = createSlice({
    name: 'blocks',
    initialState,
    reducers: {
        setBlock: (state, action) => {
            if (!state.blocks[action.payload.block]) {
                state.blocks[action.payload.block] = [];
            }

            state.blocks[action.payload.block].push(action.payload.data);
        },
    },
});

export const blocksActions = blocksSlice.actions;
export default blocksSlice.reducer;