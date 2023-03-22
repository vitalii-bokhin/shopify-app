import { createSlice } from '@reduxjs/toolkit'
import formatDateToYearMonthDayDateString from './formatDateToYearMonthDayDateString';

const today = new Date(new Date().setHours(0, 0, 0, 0));
const yesterday = new Date(
    new Date(new Date().setDate(today.getDate() - 1)).setHours(0, 0, 0, 0)
);
const week = new Date(
    new Date(new Date().setDate(today.getDate() - 7)).setHours(0, 0, 0, 0)
)

const initialState = {
    date: {
        from: formatDateToYearMonthDayDateString(week),
        to: formatDateToYearMonthDayDateString(yesterday),
        alias: 'last7days',
    },
    comparisonDate: {
        from: '',
        to: '',
    },
    isComparison: false,
}

export const datepickerSlice = createSlice({
    name: 'datepicker',
    initialState,
    reducers: {
        setDate: (state, action) => {
            state.date.from = action.payload.from;
            state.date.to = action.payload.to;
            state.date.alias = action.payload.alias;
        },
        setComparisonDate: (state, action) => {
            state.comparisonDate.from = action.payload.from;
            state.comparisonDate.to = action.payload.to;
        },
        setComparison: (state, action) => {
            state.isComparison = action.payload;
        },
    },
});

export const { setDate, setComparisonDate, setComparison } = datepickerSlice.actions;
export default datepickerSlice.reducer;