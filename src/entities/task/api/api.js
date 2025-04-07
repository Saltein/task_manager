import api from '../../../shared/api/base'

export const taskAPI = {
    getTasks: async (data) => api.get('/tasks', data),
    addTask: async (data) => api.put('/tasks/:id', data),
    deleteTask: async (data) => api.delete('/tasks/:id', data)
}