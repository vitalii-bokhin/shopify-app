import { createSlice } from '@reduxjs/toolkit'
import formatDateToYearMonthDayDateString from './formatDateToYearMonthDayDateString';

export const today = new Date(new Date().setHours(0, 0, 0, 0));
export const yesterday = new Date(new Date(new Date().setDate(today.getDate() - 1)).setHours(0, 0, 0, 0));

const initialState: {
    mainRange: DateRange;
    comparativeRange: DateRange;
} = {
    mainRange: {
        alias: localStorage.getItem('mainRange.alias') || 'last7days',
        title: localStorage.getItem('mainRange.title') || 'Last 7 days',
        period: {
            from: localStorage.getItem('mainRange.from') || formatDateToYearMonthDayDateString(new Date(
                new Date(new Date().setDate(today.getDate() - 7)).setHours(0, 0, 0, 0)
            )),
            to: localStorage.getItem('mainRange.to') || formatDateToYearMonthDayDateString(new Date(
                new Date(new Date().setDate(today.getDate() - 1)).setHours(0, 0, 0, 0)
            )),
        },
    },
    comparativeRange: {
        alias: localStorage.getItem('comparativeRange.alias') || 'noComparison',
        title: localStorage.getItem('comparativeRange.title') || 'No comparison',
        period: {
            from: localStorage.getItem('comparativeRange.from') || '',
            to: localStorage.getItem('comparativeRange.to') || '',
        },
    },
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

            localStorage.setItem('mainRange.alias', action.payload.alias);
            localStorage.setItem('mainRange.title', action.payload.title);
            localStorage.setItem('mainRange.from', action.payload.period.from);
            localStorage.setItem('mainRange.to', action.payload.period.to);
        },
        setComparativeRange: (state, action) => {
            state.comparativeRange.alias = action.payload.alias;
            state.comparativeRange.title = action.payload.title;

            if (action.payload.alias === 'noComparison') {
                state.comparativeRange.period.from = '';
                state.comparativeRange.period.to = '';

                localStorage.removeItem('comparativeRange.from');
                localStorage.removeItem('comparativeRange.to');

            } else {
                state.comparativeRange.period.from = action.payload.period.from;
                state.comparativeRange.period.to = action.payload.period.to;

                localStorage.setItem('comparativeRange.from', action.payload.period.from);
                localStorage.setItem('comparativeRange.to', action.payload.period.to);
            }

            localStorage.setItem('comparativeRange.alias', action.payload.alias);
            localStorage.setItem('comparativeRange.title', action.payload.title);
        },
    },
});

export const datepickerActions = datepickerSlice.actions;
export default datepickerSlice.reducer;