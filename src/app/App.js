import React from "react";
import { PlanPage, RegistrationPage } from "../pages";
import './global.css'
import { Provider } from "react-redux";
import { store } from "./store"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Provider store={store}>
                <Routes>
                    <Route path="/registration" element={<RegistrationPage />} />
                    <Route path="/pomodoro" element={<PlanPage />} />

                    <Route path="/" element={<RegistrationPage />} />
                </Routes>
            </Provider>
        </div>
    )
}