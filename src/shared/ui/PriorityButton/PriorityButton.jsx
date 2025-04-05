import s from "./PriorityButton.module.css"

export const PriorityButton = (props) => {
    return (
        <button
            className={s.priorityButton}
            onClick={() => props.setShowPriorityMenu(!props.showPriorityMenu)}
        >
            <div
                className={s.priorityCircle}
                style={{ backgroundColor: props.priorityOptions[props.priority - 1].color }}
            ></div>
        </button>
    )
}