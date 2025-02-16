import s from './DefaultButton.module.css'

export const DefaultButton = (props) => {
    return (
        <button className={s.button}>
            {props.label}
        </button>
    )
}