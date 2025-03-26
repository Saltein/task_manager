import { configureStore } from "@reduxjs/toolkit";
import { loginSuccess } from "../features/auth/login/model/loginSlice";

export const store = configureStore({
    reducer:{
        login: loginSuccess,

    },
});