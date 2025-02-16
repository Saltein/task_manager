import s from './DefaultInput.module.css'

export const DefaultInput = (props) => {
    return (
        <input className={s.input} type={props.type} placeholder={props.placeholder}>

        </input>
    )
}