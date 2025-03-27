import React from "react";
import { RegistrationPage } from "../pages";
import './global.css'
import { Provider } from "react-redux";
import { store } from "./store"

export const App = (props) => {
    return (
        <Provider store={store} className='app-wrapper'>
            <RegistrationPage />
        </Provider>
    )
}