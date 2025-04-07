import { Timer, DefaultButton } from '../../../shared'
import {playIco, stepForwardIco} from '../assets'
import { useDispatch, useSelector } from 'react-redux'
import {useEffect} from 'react'
import { selectIsStopped, selectMode } from '../model/TimerSelectors'
import { startStopTimer, skipTimer } from '../model/TimerSlice'
import s from './UseTimer.module.css'



export const UseTimer = () => {
    const dispatch = useDispatch()
    

    const isStopped = useSelector(selectIsStopped)
    const mode = useSelector(selectMode)

    const stopTimerHandler = () => {
        dispatch(startStopTimer())
    }
    const skipTimerHandler = () => {

        dispatch(skipTimer())
        
        localStorage.setItem('mode', mode.toString());
    }

    useEffect(() => {
        localStorage.setItem('isStopped', isStopped.toString());
    }, [isStopped]);


    return (
        <div className={s.useTimer}>
            <Timer></Timer>
            <div className={s.TimerControl}>
                <DefaultButton
                    className={s.playBTN}
                    onClick = {stopTimerHandler}
                    image={playIco}
                    imgWidth='12px'
                    style={{ width: '140px', height: "40px" }} />
                    

                <DefaultButton
                    className={s.skipBTN}
                    onClick = {skipTimerHandler}
                    image={stepForwardIco}
                    imgWidth='12px'
                    style={{ width: '40px', height: "40px" }} />

            </div>
        </div>
    )
}