import api from '../../../shared/api/base'

export const userAPI = {
    login: (data) => api.post('/login', data),
    registration: (data) => api.post('/registration', data),
}