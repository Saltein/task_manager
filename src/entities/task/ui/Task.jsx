import s from "./Task.module.css"
import priorityIcon from "./assets/prioritize.png"

export const Task = (props) => {
    return (
        <div className={s.wrapper}>
            <button className={s.doneButton}>✔</button>
            <div className={s.container}>
                <div>
                    <label className={s.title}>{props.title}</label>
                    <p className={s.description}>{props.description}</p>
                </div>
                <div className={s.buttPriority}>
                    <button className={s.deleteButton}>x</button>
                    <span><img className={s.image} src={priorityIcon} />{props.priority}</span>
                </div>
            </div>
        </div>
    )
}