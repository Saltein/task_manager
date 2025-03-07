import { useState } from "react";
import { DefaultButton, DefaultInput } from "../../shared";
import s from "./RegistrationForm.module.css";
import { registrationApi } from "../../shared/api/registrationAPI";

export const RegistrationForm = (props) => {
    const [isRegister, setIsRegister] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
    });

    const handleToggle = () => {
        setIsRegister((prev) => !prev);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const registration = () => {
        registrationApi.registration(formData)
    }

    const login = () => {
        registrationApi.registration(formData)
    }
    
    return (
        <div className={s.r_form}>
            <div className={s.logo_label}>
                <img src='/icons/tomato.svg' className={s.logo_img} alt="Logo" />
                <span className={s.label}>Pomodoro PLAN</span>
            </div>

            <div className={s.inputs}>
                <div className={`${s.animated_field} ${isRegister ? s.show : ""}`}>
                    <DefaultInput type='text' placeholder='Имя' name="name" value={formData.name} onChange={handleChange} />
                </div>
                <DefaultInput type='text' placeholder='Email' name="email" value={formData.email} onChange={handleChange} />
                <DefaultInput type='password' placeholder='Пароль' name="password" value={formData.password} onChange={handleChange} />
                <DefaultButton label={isRegister ? "ЗАРЕГИСТРИРОВАТЬСЯ" : "ВОЙТИ"} onClick={isRegister ? registration : login} />
                <a className={s.reg_butt} onClick={handleToggle}>
                    {isRegister ? "Войти" : "Зарегистрироваться"}
                </a>
            </div>
        </div>
    );
};
