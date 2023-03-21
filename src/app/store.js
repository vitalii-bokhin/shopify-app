import { configureStore } from '@reduxjs/toolkit'
import datepickerReducer from './features/datepickerSlice';
import { userApi } from './services/userApi';

export const store = configureStore({
    reducer: {
        datepicker: datepickerReducer,
        userApi: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
});