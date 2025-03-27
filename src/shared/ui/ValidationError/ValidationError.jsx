import s from "./ValidationError.module.css";

export const ValidationError = (props) => {
    return (
        <span className={`${s.warningText} ${props.warningText ? s.show : ''} ${props.isChanging ? s.changing : ''}`}>
            {props.warningText ? props.warningMessages[props.warningText] : ""}
        </span>
    )
}