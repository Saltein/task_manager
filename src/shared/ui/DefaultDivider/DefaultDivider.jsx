import s from "./DefaultDivider.module.css"

export const DefaultDivider = (props) => {
    return (
        <div className={s.divider} style={{ "--margin": props.margin }}/>
    )
}