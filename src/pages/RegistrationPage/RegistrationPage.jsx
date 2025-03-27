import { Authorisation } from "../../widgets"
import s from "./RegistrationPage.module.css"

export const RegistrationPage = (props) => {
    return (
        <div className={s.wrapper}>
            <Authorisation className={s.r_form}/>
        </div>
    )
}