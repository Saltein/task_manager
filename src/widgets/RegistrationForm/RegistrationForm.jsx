import { useState } from "react";
import { DefaultButton, DefaultInput } from "../../shared";
import s from "./RegistrationForm.module.css";

export const RegistrationForm = (props) => {
    const [isRegister, setIsRegister] = useState(false);

    const handleToggle = () => {
        setIsRegister((prev) => !prev);
    };

    return (
        <div className={s.r_form}>
            <div className={s.logo_label}>
                <img src='/icons/tomato.svg' className={s.logo_img} alt="Logo" />
                <span className={s.label}>Pomodoro PLAN</span>
            </div>

            <div className={s.inputs}>
                <div className={`${s.animated_field} ${isRegister ? s.show : ""}`}>
                    <DefaultInput type='text' placeholder='Имя' />
                </div>
                <DefaultInput type='text' placeholder='Email' />
                <DefaultInput type='password' placeholder='Пароль' />
                <DefaultButton label={isRegister ? "ЗАРЕГИСТРИРОВАТЬСЯ" : "ВОЙТИ"} />
                <a className={s.reg_butt} onClick={handleToggle}>
                    {isRegister ? "Войти" : "Зарегистрироваться"}
                </a>
            </div>
        </div>
    );
};
