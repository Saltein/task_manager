import { LoginForm, RegisterForm } from "../../../features";
import { store } from "../../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRegProcess } from "../model/authenticationSelectors";
import { authProcessSwitch } from "../model/authenticationSlice";
import s from "./Authentication.module.css";

export const Authentication = (props) => {
    const dispatch = useDispatch();
    const isRegProcess = useSelector(selectIsRegProcess)

    const handleToggle = () => {
        console.log('Должено было переключиться на логин')
        dispatch(authProcessSwitch())
    }

    return (
        <div className={s.wrapper}>
            {isRegProcess ? <RegisterForm onRegister={handleToggle} /> : <LoginForm />}
            <a className={s.reg_butt} onClick={handleToggle}>
                {isRegProcess ? "Войти" : "Зарегистрироваться"}
            </a>
        </div>
    );
};
