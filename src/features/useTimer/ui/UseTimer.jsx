import { Timer } from '../../../shared'
import s from './UseTimer.module.css'

export const UseTimer = () => {
    return (
        <div className={s.useTimer}>
            <Timer></Timer>

        </div>
    )
}