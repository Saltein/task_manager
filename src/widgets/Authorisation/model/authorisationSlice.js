import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isRegistrationProcess: true
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authProcessSwitch: (state) => {
            state.isRegistrationProcess = !state.isRegistrationProcess;
        },
    },
});

export const {authProcessSwitch} = authSlice.actions;
export default authSlice.reducer;