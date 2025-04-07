import api from '../../../shared/api/base'

export const taskAPI = {
    getTasks: async (data) => api.get('/get_tasks', data),
    addTask: async (data) => api.post('/add_task', data),
    deleteTask: async (data) => api.post('/delete_task', data)
}