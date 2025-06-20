import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './features/dashboard/dashboardSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            dashboard: dashboardReducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false, // Disable serializability check
        }),
    })
}