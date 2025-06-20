import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    navItems: [
        { name: "Dashboard", icon: "mdi:view-dashboard", path: "/" },
        { name: "Calendar", icon: "mdi:calendar-month", path: "#" },
        { name: "User Profile", icon: "mdi:account-circle", path: "#" },
        { name: "Forms", icon: "mdi:form-select", path: "#" },
        { name: "Tables", icon: "mdi:table", path: "#" },
        { name: "Pages", icon: "mdi:file-document-multiple", path: "#" },
        { name: "Charts", icon: "mdi:chart-pie", path: "#" },
        { name: "UI Elements", icon: "mdi:cube-outline", path: "#" },
        { name: "Authentication", icon: "mdi:login-variant", path: "#" },
    ],
    isExpanded: false,
}

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        setNavItems: (state, action) => {
            state.navItems = action.payload;
        },
        toggleSidebar: (state) => {
            state.isExpanded = !state.isExpanded;
        },
    },
});

export const { setNavItems, toggleSidebar } = sidebarSlice.actions;
export const selectNavItems = (state) => state.sidebar.navItems;
export const selectIsExpanded = (state) => state.sidebar.isExpanded;

export default sidebarSlice.reducer;
