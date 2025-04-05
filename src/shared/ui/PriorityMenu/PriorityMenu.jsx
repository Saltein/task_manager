import s from "./PriorityMenu.module.css"

export const PriorityMenu = (props) => {
    return (
        <div className={s.menu}>
            {props.priorities.map(({ value, label, color }) => (
                <div
                    key={value}
                    className={s.option}
                    onClick={() => props.onSelect(value)}
                >
                    <span className={s.dot} style={{ backgroundColor: color }} />
                    {label}
                </div>
            ))}
        </div>
    )
}