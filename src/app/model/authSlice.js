import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  isLoggedIn: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    logoutSuccess: (state) => {
      state.token = null;
      state.isLoggedIn = false;
    }
  }
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export const selectToken = (state) => state.auth.token;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export default authSlice.reducer;