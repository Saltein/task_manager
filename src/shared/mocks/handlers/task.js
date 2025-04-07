import { http, HttpResponse } from 'msw';
import { API_URL } from '../../config/api';

export const taskHandlers = [
    http.get(`${API_URL}/get_tasks`, () => {
        return HttpResponse.json([
            { id: 1, title: "Написание отчета по проекту", description: "Написать и оформить отчет по текущему проекту для команды. Требуется исследование данных и анализ результатов.", priority: 1, status: false, pomodoros: 3 },
            { id: 2, title: "Ответ на электронные письма", description: "Проверить и ответить на все важные электронные письма, связанные с текущими рабочими задачами, проектами и запросами от коллег и клиентов. Это включает в себя фильтрацию писем, выделение приоритетных запросов, а также составление вежливых и информативных ответов. Особое внимание нужно уделить вопросам, требующим немедленного реагирования, таким как изменения в сроках выполнения проектов или срочные запросы от клиентов. Важно также следить за тем, чтобы все письма были организованы и распределены, чтобы не потерять важные детали.", priority: 2, status: false, pomodoros: 3 },
            { id: 3, title: "Разработка новой функции для веб-сайта", description: "Разработать и внедрить новую функциональность на сайте, которая может включать в себя такие элементы, как регистрация пользователей, система отзывов или интеграция с внешними сервисами. Это включает в себя проектирование архитектуры функционала, написание кода, а также проведение тестирования, чтобы убедиться, что новая функция работает без сбоев на разных устройствах и в разных браузерах. После завершения разработки потребуется провести интеграцию с существующей системой, чтобы обеспечить бесперебойную работу всего веб-приложения. Необходимо также обновить документацию для команды разработчиков и пользователей, чтобы они могли понять, как использовать новую функцию.", priority: 3, status: false, pomodoros: 3 },
            { id: 4, title: "Редактирование текстов для блога", description: "Переписать и отредактировать тексты для корпоративного блога, улучшить их читаемость и SEO-оптимизацию.", priority: 4, status: false, pomodoros: 3 },
            { id: 5, title: "Подготовка к встрече с клиентом", description: "Подготовить материалы для встречи, составить презентацию, изучить потребности клиента и подготовить вопросы.", priority: 4, status: false, pomodoros: 3 },
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

