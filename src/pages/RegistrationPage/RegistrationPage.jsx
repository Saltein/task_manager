import { RegistrationForm } from "../../widgets"
import s from "./RegistrationPage.module.css"

export const RegistrationPage = (props) => {
    return (
        <div className={s.wrapper}>
            <RegistrationForm className={s.r_form}/>
        </div>
    )
}