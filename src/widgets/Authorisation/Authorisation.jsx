import { useEffect, useState } from "react";
import { DefaultButton, DefaultInput } from "../../shared";
import { LoginForm } from "../../features/auth/login";
import { RegisterForm } from "../../features/auth/register";
import s from "./Authorisation.module.css";
import { validatePassword } from "../../shared";
import { store } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { APIs } from "../../shared/api";
import { selectIsRegProcess } from "./model/authorisationSelectors";
import { authProcessSwitch } from "./model/authorisationSlice";

console.log("Redux store state:", store.getState());

export const Authorisation = (props) => {
    const dispatch = useDispatch();
    const isRegProcess = useSelector(selectIsRegProcess)

    const handleToggle = () => {
        dispatch(authProcessSwitch())
        console.log("Before update:", isRegProcess);
    }

    return (
        <div className={s.wrapper}>
            {isRegProcess ? <RegisterForm /> : <LoginForm />}
            <a className={s.reg_butt} onClick={handleToggle}>
                {isRegProcess ? "Войти" : "Зарегистрироваться"}
            </a>
        </div>
    );
};
