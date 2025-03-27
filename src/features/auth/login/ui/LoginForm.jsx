import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../model/loginSelectors";
import { loginSuccess } from "../model/loginSlice";
import { DefaultButton, DefaultInput } from "../../../../shared";

import { loginApi } from "../api/api";
import s from './LoginForm.module.css';


export const LoginForm = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn)

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };


    const handleLogin = () => {
        loginApi(formData)
        dispatch(loginSuccess())
    };

    return (
        <div className={s.r_form}>
            <div className={s.logo_label}>
                <img src='/icons/tomato.svg' className={s.logo_img} alt="Logo" />
                <span className={s.label}>Pomodoro PLAN</span>
            </div>

            <div className={s.inputs}>
                <DefaultInput type='text' placeholder='Email' name="email" value={formData.email} onChange={handleChange} />
                <DefaultInput type='password' placeholder='Пароль' name="password" value={formData.password} onChange={handleChange} />
                <DefaultButton label={"ВОЙТИ"} onClick={handleLogin} />
            </div>

            {isLoggedIn && <p>Вы успешно вошли!</p>}

        </div>
    );
}