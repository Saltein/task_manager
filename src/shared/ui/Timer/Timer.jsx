import s from './Timer.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import { tick } from '../../../features/useTimer/model/TimerSlice'
import { selectCurrentTime, selectFormattedTime, selectIsStopped, selectMode } from '../../../features/useTimer/model/TimerSelectors'


export const Timer = () => {
    const dispatch = useDispatch()
    const intervalRef = useRef(null)

    const time = useSelector(selectFormattedTime);
    const isStopped = useSelector(selectIsStopped)
    const currentTime = useSelector(selectCurrentTime)
    const mode = useSelector(selectMode)


    useEffect(() => {
        if (!isStopped) {
            intervalRef.current = setInterval(() => {
                dispatch(tick());
                localStorage.setItem('currentTime', currentTime.toString());
                localStorage.setItem('mode', mode.toString());
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        return () => clearInterval(intervalRef.current);
    }, [isStopped, dispatch, currentTime, mode])

    return (
        <div className={s.Timer}>
            <p className={s.h1}>{time}</p>
        </div>
    )

}