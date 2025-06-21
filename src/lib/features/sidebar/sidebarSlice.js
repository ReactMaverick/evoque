import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    navItems: [
        { name: "Dashboard", icon: "material-symbols:dashboard-outline-rounded", path: "/" },
        { name: "User", icon: "mdi:user-outline", path: "#" },
        { name: "Settings", icon: "material-symbols:settings-outline-rounded", path: "#" },
        { name: "Documents", icon: "icon-park-outline:doc-detail", path: "#" },
        { name: "New", icon: "material-symbols-light:fiber-new-outline-rounded", path: "#" },
        { name: "Booking", icon: "material-symbols:book-outline-rounded", path: "#" },
        { name: "Finance", icon: "material-symbols:finance-rounded", path: "#" },
        { name: "Reports", icon: "mdi:report-line", path: "#" },
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
