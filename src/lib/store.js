import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './features/booking/bookingSlice';
import sidebarReducer from './features/sidebar/sidebarSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            booking: bookingReducer,
            sidebar: sidebarReducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false, // Disable serializability check
        }),
    })
}