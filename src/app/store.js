import { configureStore } from '@reduxjs/toolkit'
import datepickerReducer from './features/datepickerSlice';
import blocksReducer from './features/blocksSlice';
import { userApi } from './services/userApi';
import { userFirestoreApi } from './services/firebaseApi';

export const store = configureStore({
    reducer: {
        datepicker: datepickerReducer,
        blocks: blocksReducer,
        userApi: userApi.reducer,
        userFirestoreApi: userFirestoreApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware, userFirestoreApi.middleware),
});