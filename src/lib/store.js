import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './features/dashboard/dashboardSlice';
import sidebarReducer from './features/dashboard/sidebarSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            dashboard: dashboardReducer,
            sidebar: sidebarReducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false, // Disable serializability check
        }),
    })
}