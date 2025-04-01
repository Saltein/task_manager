import s from "./Task.module.css"

export const Task = (props) => {
    return (
        <div className={s.wrapper}>
            <button className={s.doneButton}>✔</button>
            <div>
                <label className={s.title}>{props.title}</label>
                <p className={s.description}>{props.description}</p>
            </div>
        </div>
    )
}