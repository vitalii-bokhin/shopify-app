import { configureStore } from '@reduxjs/toolkit'
import datepickerReducer from './features/datepickerSlice';
import blocksReducer from './features/blocksSlice';
import { userApi } from './services/userApi';

export const store = configureStore({
    reducer: {
        datepicker: datepickerReducer,
        blocks: blocksReducer,
        userApi: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
});