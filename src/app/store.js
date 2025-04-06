import { configureStore } from "@reduxjs/toolkit";

import authenticationReducer from "../widgets/Authentication/model/authenticationSlice";
import loginReducer from "../features/authenticate/login/model/loginSlice";
import registerReducer from "../features/authenticate/register/model/registerSlice";

import timerReducer from "../features/useTimer/model/TimerSlice"
import addTaskFormReducer from "../features/AddTaskForm/model/addTaskFormSlice";
import authReducer from './model/authSlice'; // Импортируем authReducer



export const store = configureStore({
    reducer: {
        login: loginReducer,
        register: registerReducer,
        authentication: authenticationReducer, 
        timer: timerReducer,
        addTaskForm: addTaskFormReducer,
        auth: authReducer // Добавляем authReducer в store
    },
});
