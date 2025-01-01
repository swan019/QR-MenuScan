import { createSlice } from '@reduxjs/toolkit';

const initialState = []; // Initially, the menu array is empty.

const menuSlice = createSlice({
    name: 'Menus',
    initialState,
    reducers: {
        // This reducer replaces the current menu array with a new array.
        setMenu: (state, action) => {
            return action.payload; // Replace the entire state with the new menu array.
        },

        // This reducer clears the menu array by resetting it to the initial state.
        clearMenu: (state) => {
            return initialState;
        },

        // Optional: Remove a menu item by its id.
        filterMenuItem: (state, action) => {
            return state.filter((menu) => menu.id !== action.payload);
        },
    },
});

export const { setMenu, clearMenu, addMenuItem, filterMenuItem } = menuSlice.actions;
export default menuSlice.reducer;
