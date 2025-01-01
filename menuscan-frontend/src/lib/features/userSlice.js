import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: null,
    name: '',
    storeName: '',
    email: '',
    mobile: '',
    qrCode: '',
    active:false
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { id, name, storeName, email, mobile, active, qrCode } = action.payload;
            state.id = id;
            state.name = name;
            state.storeName = storeName;
            state.email = email;
            state.mobile = mobile;
            state.qrCode = qrCode;
            state.active = active;
        },
        clearUser: (state) => {
            Object.assign(state, initialState);
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
