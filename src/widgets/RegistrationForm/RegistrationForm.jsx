import { useEffect, useState } from "react";
import { DefaultButton, DefaultInput } from "../../shared";
import { LoginForm } from "../../features/auth/login/ui/LoginForm";
import s from "./RegistrationForm.module.css";
import { validatePassword } from "../../shared";
import { store } from "../../app/store";
import { Provider } from "react-redux";
import { APIs } from "../../shared/api";


export const RegistrationForm = (props) => {



    return (
        <Provider store={store}>
            <LoginForm></LoginForm>
        </Provider>

    );
};
