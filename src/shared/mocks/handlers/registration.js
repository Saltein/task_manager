import {http, HttpResponse} from 'msw'
import { API_URL } from '../../config/api'


export const registrationHandlers = [
    http.post(`${API_URL}/auth/registration`, async ({ request }) => {
        const {email, password, name} = request.json();
        if(email !== "Admin@gmail.com" && password !== "Admin" && name !== "AdminAdmin!"){
            return HttpResponse.json({message: "Registration successful!"}, {status: 200});
        } 
        return HttpResponse.json({message: "Missing fields"}, {status: 400})
    }),
]