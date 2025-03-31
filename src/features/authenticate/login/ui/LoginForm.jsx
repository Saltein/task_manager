import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../model/loginSelectors";
import { loginSuccess } from "../model/loginSlice";
import { DefaultButton, DefaultInput, validateEmail, ValidationError } from "../../../../shared";

import { loginApi } from "../api/api";
import s from './LoginForm.module.css';


export const LoginForm = () => {
    // ПЕРЕМЕННЫЕ
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn)

    const warningMessages = {
        0: "",
        1: "Поля не могут быть пустыми",
        2: "Неверный Email или пароль",
        3: "Такой почты не существует"
    };

    // СОСТОЯНИЯ
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const [isChanging, setIsChanging] = useState(false);
    const [warningText, setWarningText] = useState('')

    // ФУНКЦИИ
    const showWarningMessage = () => {
        setIsChanging(true);
        setTimeout(() => setIsChanging(false), 500); // Убираем эффект через 0.5 сек
    }

    // ХЕНДЛЕРЫ
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleLogin = async () => {
        if (!formData.email || !formData.password) {
            setWarningText(1)
            showWarningMessage()
            return
        }
        if (!validateEmail(formData.email)) {
            setWarningText(3)
            showWarningMessage()
            return
        }

        try {
            setWarningText(0)
            const response = await loginApi(formData);
            if (response?.status === 200) {
                console.log("Успешный вход:", response);
                dispatch(loginSuccess());
            }
            else {
                console.error("Ошибка входа:", response?.message || "Неизвестная ошибка");
                setWarningText(2);
                showWarningMessage();
            }
        }
        catch (error) {
            console.error("Ошибка сети или сервера:", error);
            setWarningText(2);
            showWarningMessage();
        }
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

                <ValidationError warningText={warningText} isChanging={isChanging} warningMessages={warningMessages} />

                <DefaultButton label={"ВОЙТИ"} onClick={handleLogin} />
            </div>



            {isLoggedIn && <p>Вы успешно вошли!</p>}

        </div>
    );
}