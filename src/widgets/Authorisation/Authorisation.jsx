import { useEffect, useState } from "react";
import { DefaultButton, DefaultInput } from "../../shared";
import { LoginForm } from "../../features/auth/login";
import { RegisterForm } from "../../features/auth/register";
import s from "./Authorisation.module.css";
import { validatePassword } from "../../shared";
import { store } from "../../app/store";
import { Provider } from "react-redux";
import { APIs } from "../../shared/api";


export const Authorisation = (props) => {



    return (
        <Provider store={store}>
            <RegisterForm></RegisterForm>
        </Provider>

    );
};
