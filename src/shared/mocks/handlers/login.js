import {http, HttpResponse} from 'msw'
import { API_URL } from '../../config/api'

export const loginHandlers = [
    http.post(`${API_URL}/auth/login`, async ({ request }) => {
        const { email, password } = await request.json();
        if (email === 'Admin@gmail.com' && password === 'AdminAdmin!'){
            return HttpResponse.json({message: 'Authorisation success!'}, {status: 200});
        }
        return HttpResponse.json({message: 'Invalid email or password'}, {status: 401});
    }),
]