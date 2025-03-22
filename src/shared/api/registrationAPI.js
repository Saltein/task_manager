import api from './base'

export const registrationApi = {
    registration: (params) => api.post('/registration', {params})
}