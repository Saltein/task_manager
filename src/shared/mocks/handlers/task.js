import { http, HttpResponse  } from 'msw';
import { API_URL } from '../../config/api';

export const taskHandlers = [
    http.get(`${API_URL}/tasks`, () => {
        return HttpResponse.json([
            {id: '1', title: 'купить продукты', priority: 'high'},
            {id: '2', title: 'выкинуть мусор', priority: 'low'},
            {id: '3', title: 'Слетать на Марс', priority: 'high'},
        ])  
    }),
]
