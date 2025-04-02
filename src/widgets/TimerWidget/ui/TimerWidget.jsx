import {UseTimer} from '../../../features'
import s from './TimerWidget.module.css'

export const TimerWidget = () => {
    return (
        <div className={s.TimerWidget}>
            <UseTimer></UseTimer>
        </div>
    )
}