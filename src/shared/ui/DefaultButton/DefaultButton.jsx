import s from './DefaultButton.module.css'

export const DefaultButton = (props) => {
    return (
        <button className={s.button} onClick={props.onClick}>
            {props.label}
        </button>
    )
}