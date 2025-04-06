import s from './DefaultButton.module.css'

export const DefaultButton = (props) => {


    return (
        <button
            className={s.button}
            onClick={props.onClick}
            style={props.style}>

            {props.label}
            {props.image && (
                <img
                    style={{
                        width: props.imgWidth,
                        height: props.imgHeight
                    }}
                    src={props.image} />
            )}

        </button>
    )
}