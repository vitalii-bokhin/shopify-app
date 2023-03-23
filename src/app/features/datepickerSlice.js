import { createSlice } from '@reduxjs/toolkit'
import formatDateToYearMonthDayDateString from './formatDateToYearMonthDayDateString';

export const today = new Date(new Date().setHours(0, 0, 0, 0));
export const yesterday = new Date(new Date(new Date().setDate(today.getDate() - 1)).setHours(0, 0, 0, 0));

const initialState = {
    mainRange: {
        alias: 'last7days',
        title: 'Last 7 days',
        period: {
            from: formatDateToYearMonthDayDateString(new Date(
                new Date(new Date().setDate(today.getDate() - 7)).setHours(0, 0, 0, 0)
            )),
            to: formatDateToYearMonthDayDateString(new Date(
                new Date(new Date().setDate(today.getDate() - 1)).setHours(0, 0, 0, 0)
            )),
        },
    },
    comparativeRange: {
        alias: 'noComparison',
        title: 'No comparison',
        period: {
            from: '',
            to: '',
        },
    },
    isComparison: false,
};

export const datepickerSlice = createSlice({
    name: 'datepicker',
    initialState,
    reducers: {
        setMainRange: (state, action) => {
            state.mainRange.alias = action.payload.alias;
            state.mainRange.title = action.payload.title;
            state.mainRange.period.from = action.payload.period.from;
            state.mainRange.period.to = action.payload.period.to;
        },
        setComparativeRange: (state, action) => {
            state.comparativeRange.alias = action.payload.alias;
            state.comparativeRange.title = action.payload.title;
            state.comparativeRange.period.from = action.payload.period.from;
            state.comparativeRange.period.to = action.payload.period.to;
        },
        setComparison: (state, action) => {
            state.isComparison = action.payload;
        },
    },
});

export const datepickerActions = datepickerSlice.actions;
export default datepickerSlice.reducer;