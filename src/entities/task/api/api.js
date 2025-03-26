import api from '../../../shared/api/base'

export const taskAPI = {
    getTask: (data) => api.get('/tasks', data)
}