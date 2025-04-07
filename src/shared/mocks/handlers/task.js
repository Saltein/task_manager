import { http, HttpResponse } from 'msw';
import { API_URL } from '../../config/api';

export const taskHandlers = [
    http.get(`${API_URL}/get_tasks`, () => {
        return HttpResponse.json([
            { id: 1, title: "title 1", description: "description 1", priority: 1, status: false, pomodoros: 3 },
            { id: 2, title: "title 2", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", priority: 2, status: false, pomodoros: 3 },
            { id: 3, title: "title 3", description: "description 3", priority: 3, status: false, pomodoros: 3 },
            { id: 4, title: "title 4", description: "description 4", priority: 4, status: false, pomodoros: 3 },
            { id: 5, title: "title 4", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", priority: 4, status: false, pomodoros: 3 },
            { id: 6, title: "title 4", description: "description 4", priority: 4, status: false, pomodoros: 3 },
            { id: 7, title: "title 4", description: "description 4", priority: 4, status: false, pomodoros: 3 },
            { id: 8, title: "title 4", description: "description 4", priority: 4, status: false, pomodoros: 3 },
            { id: 9, title: "title 4", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", priority: 4, status: false, pomodoros: 3 },
            { id: 10, title: "title 4", description: "description 4", priority: 4, status: false, pomodoros: 3 },
            { id: 11, title: "title 4", description: "description 4", priority: 4, status: false, pomodoros: 3 },
            { id: 12, title: "title 4", description: "description 4", priority: 4, status: false, pomodoros: 3 },
            { id: 14, title: "title 4", description: "description 4", priority: 4, status: false, pomodoros: 3 },
        ])
    }),

    http.post(`${API_URL}/add_task`, async ({ request }) => {
        const newTask = await request.json();

        console.log("Получена новая задача:", newTask);

        // Можно сделать, чтобы `msw` возвращал её обратно как будто сервер сохранил
        return HttpResponse.json({ ...newTask, id: Date.now() });
    }),

    http.post(`${API_URL}/delete_task`, async ({ request }) => {
        const taskID = await request.json();

        console.log(`Задача с индексом ${taskID} удалена`)
    })
]

