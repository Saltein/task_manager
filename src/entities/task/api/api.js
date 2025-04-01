import api from '../../../shared/api/base'

export const taskAPI = {
    getTasks: async (data) => api.get('/tasks', data)
}