import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DefaultButton, DefaultInput, validatePassword, ValidationError, APIs } from "../../../../shared";
import s from "./RegisterForm.module.css";
import { registerApi } from "../api/api";
import { registerSuccess } from "../model/registerSlice";

export const RegisterForm = (props) => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
    });
    const [isChanging, setIsChanging] = useState(false);
    const [warningText, setWarningText] = useState('')
    const [showName, setShowName] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const warningMessages = {
        1: "Пароль должен содержать как минимум 6 символов",
        2: "Пароль должен содержать как минимум 2 заглавные буквы",
        3: "Пароль должен содержать как минимум 1 специальный символ",
    };

    useEffect(() => {
        const newWarning = validatePassword(formData.password);

        if (newWarning !== warningText) {
            setIsChanging(true);
            setTimeout(() => setIsChanging(false), 500); // Убираем эффект через 0.5 сек
        }

        setWarningText(newWarning);
    }, [formData.password]);

    useEffect(() => {
        setTimeout(() => setShowName(true), 100); // Задержка для плавности
    }, []);

    const handleRegistration = () => {
        if (formData.name.length() < 3) {

        }
        registerApi(formData)
        dispatch(registerSuccess)
    }


    return (
        <div className={s.r_form}>
            <div className={s.logo_label}>
                <img src='/icons/tomato.svg' className={s.logo_img} alt="Logo" />
                <span className={s.label}>Pomodoro PLAN</span>
            </div>

            <div className={s.inputs}>
                <div className={`${s.animatedField} ${showName ? s.show : ''}`}>
                    <DefaultInput type='text' placeholder='Имя' name="name" value={formData.name} onChange={handleChange} />
                </div>
                <DefaultInput type='text' placeholder='Email' name="email" value={formData.email} onChange={handleChange} />
                <DefaultInput type='password' placeholder='Пароль' name="password" value={formData.password} onChange={handleChange} />

                <span className={`${s.warningText} ${warningText ? s.show : ''} ${isChanging ? s.changing : ''}`}>
                    {warningText ? warningMessages[warningText] : ""}
                </span>

                <DefaultButton label={"ЗАРЕГИСТРИРОВАТЬСЯ"} onClick={handleRegistration} />
            </div>
        </div>
    );
};
