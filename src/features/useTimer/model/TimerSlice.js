import { createSlice } from "@reduxjs/toolkit";

const savedTime = localStorage.getItem('currentTime');
const savedMode = localStorage.getItem('mode');
const savedIsStopped = localStorage.getItem('isStopped');

const initialState = {
    pomodor:  1500,
    currentTime: savedTime ? parseInt(savedTime, 10) : 1500,
    rest: 300,
    isStopped: savedIsStopped || true,
    mode: savedMode || 'work',
}

const TimerSlice = createSlice({
    name: "TimerSlice",
    initialState,
    reducers: {
        setPomodor: (state, action) => {
            state.pomodor = action.payload;
            if( state.mode === 'work'){
                state.currentTime =action.payload;
            }
        },
        setRest: (state, action) => {
            state.rest = action.payload;
            if (state.mode === 'rest'){
                state.currentTime = action.payload;
            }
        },
        skipTimer: (state) => {
            state.mode = state.mode === "work" ? "rest" : "work"
            state.currentTime = state.mode === "work" ? state.pomodor : state.rest
        },
        startStopTimer: (state) => {
            state.isStopped = !state.isStopped;
        },
        resetTimer: (state) => {
            state.currentTime = state.mode === "work" ? state.pomodor : state.rest;
            state.isStopped = true;
        },
        tick: (state) => {
            if(!state.isStopped && state.currentTime > 0){
                state.currentTime -= 1;
            }
            else if(!state.isStopped && state.currentTime === 0){
                state.mode = "rest";
                state.currentTime = state.rest;
            }
            else {
                state.mode = "work";
                state.currentTime = state.pomodor;
            }
        }
    }

});

export const {
    setPomodor,
    setRest,
    skipTimer,
    startStopTimer,
    resetTimer,
    tick,
} = TimerSlice.actions;
export default TimerSlice.reducer;