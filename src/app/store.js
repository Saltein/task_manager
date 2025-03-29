import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "../widgets/Authentication/model/authenticationSlice";
import loginReducer from "../features/authenticate/login/model/loginSlice";
import registerReducer from "../features/authenticate/register/model/registerSlice";


export const store = configureStore({
    reducer: {
        login: loginReducer,
        register: registerReducer,
        authentication: authenticationReducer, 
    },
});
