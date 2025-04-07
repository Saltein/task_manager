import React, { useEffect, useState } from "react";
import { PlanPage, RegistrationPage } from "../pages";
import './global.css'
import { useDispatch } from "react-redux";

import { Route, Routes } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './hoc/ProtectedRoute'; // Импортируем ProtectedRoute
import { loginSuccess } from "./model/authSlice";

export const App = (props) => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true); // Добавляем состояние загрузки

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const payload = JSON.parse(atob(token.split('.')[1]));
                dispatch(loginSuccess({
                    token,
                    id: payload.id,
                    name: payload.name,
                    role: payload.role,
                }));
            } catch (error) {
                console.error('Invalid token:', error);
                localStorage.removeItem('token');
            }
        }
        setIsLoading(false); // Устанавливаем завершение загрузки
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading...</div>; // Показываем лоадер во время проверки
    }

    return (
        <div className='app-wrapper'>
            <AuthProvider>
                <Routes>
                    <Route path="/registration" element={<RegistrationPage />} />
                    <Route path="/" element={<RegistrationPage />} />

                    <Route path="/pomodoro" element={
                        <ProtectedRoute>
                            <PlanPage />
                        </ProtectedRoute>
                    } />
                </Routes>
            </AuthProvider>
        </div>
    )
}