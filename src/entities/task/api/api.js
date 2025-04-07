import api from '../../../shared/api/base'

export const taskAPI = {
    getTasks: async (data) => api.get('/tasks', data),
    addTask: async (data) => api.post('/tasks', data),
    deleteTask: async (data) => api.delete(`/tasks/${data}`, data),
    updateTask: async (data) => api.put(`/tasks/${data}`, data)
}