import s from "./DefaultDivider.module.css"

export const DefaultDivider = (props) => {
    const classes = props.vertical ? s.v_divider : s.h_divider;

    return (
        <div 
            className={classes} 
            style={{ "--margin": props.margin }}
        />
    )
}