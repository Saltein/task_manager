import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { DefaultButton, DefaultInput, validatePassword, ValidationError, checkForMinLen, validateEmail } from "../../../../shared";
import s from "./RegisterForm.module.css";
import { registerApi } from "../api/api";
import { registerSuccess } from "../model/registerSlice";

export const RegisterForm = (props) => {

    // ПЕРЕМЕННЫЕ
    const dispatch = useDispatch();

    const warningMessages = {
        0: "",
        1: "Пароль должен содержать как минимум 6 символов",
        2: "Пароль должен содержать как минимум 2 заглавные буквы",
        3: "Пароль должен содержать как минимум 1 специальный символ",
        4: "Имя должно содержать хотя бы 3 символа",
        5: "Такой почты не существует",
    };

    // СОСТОЯНИЯ
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
    });
    const [isChanging, setIsChanging] = useState(false);
    const [showName, setShowName] = useState(false);
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

    const handleRegistration = () => {
        if (!checkForMinLen(formData.name, 3)) {
            setWarningText(4)
            showWarningMessage()
        }
        else if (!validateEmail(formData.email)) {
            setWarningText(5)
            showWarningMessage()
        }
        else if (!formData.password) {
            setWarningText(1)
            showWarningMessage()
        }
        else {
            setWarningText(0)
            registerApi(formData)
            dispatch(registerSuccess)
        }
    }

    // ЭФФЕКТЫ
    useEffect(() => {
        const newWarning = validatePassword(formData.password);
        if (newWarning !== warningText) {
            showWarningMessage()
        }
        setWarningText(newWarning);
    }, [formData.password, warningText]);

    useEffect(() => {
        setTimeout(() => setShowName(true), 100); // Задержка для плавности
    }, []);


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

                <ValidationError warningText={warningText} isChanging={isChanging} warningMessages={warningMessages} />

                <DefaultButton label={"ЗАРЕГИСТРИРОВАТЬСЯ"} onClick={handleRegistration} />
            </div>
        </div>
    );
};
