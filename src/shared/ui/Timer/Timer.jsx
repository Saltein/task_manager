import { useState } from 'react'
import s from './Timer.module.css'

export const Timer = () => {

    const [timer, setTimer] = useState()

    return(
        <div className={s.Timer}>
            <p className={s.h1}>00:00</p>
        </div>
    )

}