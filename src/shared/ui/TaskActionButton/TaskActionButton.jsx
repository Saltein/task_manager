import s from "./TaskActionButton.module.css"

export const TaskActionButton = (props) => {

    const buttonClass = `${s.button} ${
        props.action === 'done' ? s.doneActive : 
        props.action === 'delete' ? s.deleteActive : ''
    }`;

    return (
        <button className={buttonClass} onClick={props.onClick}>
            <img src={props.icon} alt={props.alt} />
        </button>
    )
}