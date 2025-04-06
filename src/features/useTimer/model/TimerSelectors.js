import { createSelector } from "reselect";

export const selectPomodor = (state) => state.timer.pomodor;
export const selectCurrentTime = (state) => state.timer.currentTime;
export const selectRest = (state) => state.timer.rest;
export const selectIsStopped = (state) => state.timer.isStopped;
export const selectMode = (state) => state.timer.mode

const selectTimer = (state) => state.timer;

export const selectFormattedTime = createSelector(
    [selectTimer],
    (timer) => {
        const minutes = Math.floor(timer.currentTime / 60);
        const seconds = timer.currentTime % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
);