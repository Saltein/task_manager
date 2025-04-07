import api from '../../../shared/api/base'

export const taskAPI = {
    getTasks: async (data) => api.get('/tasks', data),
    addTask: async (data) => api.post('/tasks', data),
    deleteTask: async (data) => api.delete('/tasks/:id', data)
}