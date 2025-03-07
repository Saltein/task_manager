import api from '.base'

export const taskApi = {
    getTask: (params) => api.get('/tasks', { params })
}