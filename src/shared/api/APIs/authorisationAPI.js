import api from '../base'

export const authorisationAPI = {
    login: (data) => api.post('/login', data)
}