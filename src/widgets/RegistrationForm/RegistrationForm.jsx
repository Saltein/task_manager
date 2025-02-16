import { DefaultButton, DefaultInput } from "../../shared"
import s from "./RegistrationForm.module.css"

export const RegistrationForm = (props) => {
    return (
        <div className={s.r_form}>
            <div className={s.inputs}>
                <DefaultInput type='text' placeholder='Email' />
                <DefaultInput type='password' placeholder='Пароль' />
            </div>
            <DefaultButton label="ЖОПА" />
        </div>
    )
}