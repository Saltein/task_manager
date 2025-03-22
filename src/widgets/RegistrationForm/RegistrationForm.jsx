import { useEffect, useState } from "react";
import { DefaultButton, DefaultInput } from "../../shared";
import s from "./RegistrationForm.module.css";
import { validatePassword } from "../../shared";
import { APIs } from "../../shared/api";

export const RegistrationForm = (props) => {
    const [isRegister, setIsRegister] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
    });
    const [warningText, setWarningText] = useState('')
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

    const warningMessages = {
        1: "Пароль должен содержать как минимум 6 символов",
        2: "Пароль должен содержать как минимум 2 заглавные буквы",
        3: "Пароль должен содержать как минимум 1 специальный символ"
    };



    useEffect(() => {
        if (!isRegister) {
            setWarningText('');
            return;
        }

        const newWarning = validatePassword(formData.password);

        if (newWarning !== warningText) {
            setIsChanging(true);
            setTimeout(() => setIsChanging(false), 500); // Убираем эффект через 0.5 сек
        }

        setWarningText(newWarning);
    }, [formData.password, isRegister]);



    const registration = () => {
        // registrationApi.registration(formData)
    }

    const login = () => {
        APIs.login(formData)
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

                <span className={`${s.warningText} ${warningText ? s.show : ''} ${isChanging ? s.changing : ''}`}>
                    {warningText ? warningMessages[warningText] : ""}
                </span>


                <DefaultButton label={isRegister ? "ЗАРЕГИСТРИРОВАТЬСЯ" : "ВОЙТИ"} onClick={isRegister ? registration : login} />
                <a className={s.reg_butt} onClick={handleToggle}>
                    {isRegister ? "Войти" : "Зарегистрироваться"}
                </a>
            </div>
        </div>
    );
};
