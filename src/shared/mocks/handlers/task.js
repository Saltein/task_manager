import { http, HttpResponse } from 'msw';
import { API_URL } from '../../config/api';

export const taskHandlers = [
    http.get(`${API_URL}/tasks`, () => {
        return HttpResponse.json([
            { id: 1, title: "title 1", description: "description 1", priority: 1, status: false, pomodoros: 3 },
            { id: 2, title: "title 2", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", priority: 2, status: false, pomodoros: 3 },
            { id: 3, title: "title 3", description: "description 3", priority: 3, status: false, pomodoros: 3 },
            { id: 4, title: "title 4", description: "description 4", priority: 4, status: false, pomodoros: 3 },
            { id: 4, title: "title 4", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", priority: 4, status: false, pomodoros: 3 },
            { id: 4, title: "title 4", description: "description 4", priority: 4, status: false, pomodoros: 3 },
            { id: 4, title: "title 4", description: "description 4", priority: 4, status: false, pomodoros: 3 },
            { id: 4, title: "title 4", description: "description 4", priority: 4, status: false, pomodoros: 3 },
            { id: 4, title: "title 4", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", priority: 4, status: false, pomodoros: 3 },
            { id: 4, title: "title 4", description: "description 4", priority: 4, status: false, pomodoros: 3 },
            { id: 4, title: "title 4", description: "description 4", priority: 4, status: false, pomodoros: 3 },
            { id: 4, title: "title 4", description: "description 4", priority: 4, status: false, pomodoros: 3 },
            { id: 4, title: "title 4", description: "description 4", priority: 4, status: false, pomodoros: 3 },
        ])
    }),

]
