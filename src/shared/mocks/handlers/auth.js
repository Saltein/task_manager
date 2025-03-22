import {http, HttpResponse} from 'msw'
import { API_URL } from '../../config/api';

export const authHandlers = [
    http.post(`${API_URL}/login`, async ({ request }) => {
        const { email, password } = await request.json();
        if (email === 'admin' && password === 'admin'){
            return HttpResponse.json({message: 'Authorisation success!'}, {status: 200});
        }
        return HttpResponse.json({message: 'Invalid email or password'}, {status: 401});
    })
]