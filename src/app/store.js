import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../widgets/Authorisation/model/authorisationSlice";
import { loginSuccess } from "../features/auth/login/model/loginSlice";

export const store = configureStore({
    reducer: {
        login: loginSuccess,
        auth: authReducer, // <-- Здесь должен быть сам редьюсер
    },
});
