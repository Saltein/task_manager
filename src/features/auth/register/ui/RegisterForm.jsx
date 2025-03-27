import { useEffect, useState } from "react";
import { DefaultButton, DefaultInput, validatePassword, APIs } from "../../../../shared";
import s from "./RegisterForm.module.css";

export const RegisterForm = (props) => {
    const [isRegister, setIsRegister] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
    });
    const [isChanging, setIsChanging] = useState(false);

    const handleToggle = () => {
        setIsRegister((prev) => !prev);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    // const warningMessages = {
    //     1: "Пароль должен содержать как минимум 6 символов",
    //     2: "Пароль должен содержать как минимум 2 заглавные буквы",
    //     3: "Пароль должен содержать как минимум 1 специальный символ"
    // };

    const handleRegistration = () => {
        APIs.registration(formData)
    }


    return (
        <div className={s.r_form}>
            <div className={s.logo_label}>
                <img src='/icons/tomato.svg' className={s.logo_img} alt="Logo" />
                <span className={s.label}>Pomodoro PLAN</span>
            </div>

            <div className={s.inputs}>

                <DefaultInput type='text' placeholder='Имя' name="name" value={formData.name} onChange={handleChange} />
                <DefaultInput type='text' placeholder='Email' name="email" value={formData.email} onChange={handleChange} />
                <DefaultInput type='password' placeholder='Пароль' name="password" value={formData.password} onChange={handleChange} />

                {/* <span className={`${s.warningText} ${warningText ? s.show : ''} ${isChanging ? s.changing : ''}`}>
                    {warningText ? warningMessages[warningText] : ""}
                </span> */}

                <DefaultButton label={"ЗАРЕГИСТРИРОВАТЬСЯ"} onClick={handleRegistration} />
            </div>
        </div>
    );
};
