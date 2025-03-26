import api from '../base'

export const registrationApi = {
    registration: (data) => api.post('/registration', data)
}