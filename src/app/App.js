import React from "react";
import { PlanPage, RegistrationPage } from "../pages";
import './global.css'
import { Provider } from "react-redux";
import { store } from "./store"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './hoc/ProtectedRoute'; // Импортируем ProtectedRoute

export const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Provider store={store}>
                <AuthProvider>
                    <Routes>
                        <Route path="/registration" element={<RegistrationPage />} />
                        <Route path="/" element={<RegistrationPage />} />

                        {/* Защищенный маршрут */}
                        <Route path="/pomodoro" element={
                            <ProtectedRoute>
                                <PlanPage />
                            </ProtectedRoute>
                        } />
                    </Routes>
                </AuthProvider>
            </Provider>
        </div>
    )
}