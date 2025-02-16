import React from "react";
import ReactDOM from 'react-dom/client';
import { Route, Routes } from 'react-router-dom';
import { RegistrationPage } from "../pages";
import './global.css'

export const App = (props) => {
    return (
        <div className='app-wrapper'>
            <RegistrationPage />
        </div>
    )
}