import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    date: {
        from: '',
        to: '',
    },
}

export const datepickerSlice = createSlice({
    name: 'datepicker',
    initialState,
    reducers: {
        // increment: (state) => {
        //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
        //   // doesn't actually mutate the state because it uses the Immer library,
        //   // which detects changes to a "draft state" and produces a brand new
        //   // immutable state based off those changes
        //   state.value += 1
        // },
        // decrement: (state) => {
        //   state.value -= 1
        // },
        // incrementByAmount: (state, action) => {
        //   state.value += action.payload
        // },
        setDate: (state, action) => {
            state.date.from = action.payload.from;
            state.date.to = action.payload.to;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setDate } = datepickerSlice.actions;

export default datepickerSlice.reducer;