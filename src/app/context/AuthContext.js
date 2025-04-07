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

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true); // Устанавливаем isAuthenticated в true, если токен есть
    } else {
      setIsAuthenticated(false); // В противном случае - false
    }
  }, [token]);

  const login = (token) => {
    dispatch(loginSuccess(token));
    localStorage.setItem('token', token); // Сохраняем токен в localStorage
    setIsAuthenticated(true);
  };

  const logout = () => {
    dispatch(logoutSuccess());
    localStorage.removeItem('token'); // Удаляем токен из localStorage
    setIsAuthenticated(false);
  };

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