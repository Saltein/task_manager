import { http, HttpResponse } from 'msw'
import { API_URL } from '../../config/api'

export const loginHandlers = [
    http.post(`${API_URL}/auth/login`, async ({ request }) => {
        const { email, password } = await request.json();
        const token = {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6Ikl2YW4gOikiLCJpYXQiOjE3NDM2ODg2OTQsImV4cCI6MTc0NjI4MDY5NH0.Rb8XUyF_2A6SQ0IwHw9oCgOq5ywlSQ_ahNw6XAZmeUw"
        }
        if (email === 'Admin@gmail.com' && password === 'AdminAdmin!') {
            return HttpResponse.json(token, { status: 200 });
        }
        return HttpResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }),
]