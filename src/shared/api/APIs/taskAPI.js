import api from '../base'

export const taskApi = {
    getTask: (data) => api.get('/tasks', data)
}