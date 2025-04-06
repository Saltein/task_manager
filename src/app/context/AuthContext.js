import { createContext, useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, logoutSuccess, selectToken } from '../model/authSlice';

// Создаем контекст с начальным значением null
export const AuthContext = createContext(null);

// Провайдер контекста, который будет оборачивать наше приложение
export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  // Синхронизируем состояние аутентификации с Redux
  useEffect(() => {
    setIsAuthenticated(!!token);
  }, [token]);

  // Функция входа в систему
  const login = (token) => {
    dispatch(loginSuccess(token));
    setIsAuthenticated(true);
  };

  // Функция выхода из системы
  const logout = () => {
    dispatch(logoutSuccess());
    setIsAuthenticated(false);
  };

  // Значение, которое будет доступно через контекст
  const value = {
    isAuthenticated,
    token,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Хук для удобного использования контекста
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};