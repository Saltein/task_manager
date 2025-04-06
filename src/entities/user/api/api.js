import api from '../../../shared/api/base'

export const userAPI = {
    login: async (data) => api.post('/auth/login', data),
    registration: async (data) => api.post('/auth/registration', data),
}