import { useEffect, useState } from "react";
import { Task } from "../../../entities/task";
import { APIs } from "../../../shared";
import { DefaultDivider } from "../../../shared/ui/DefaultDivider/DefaultDivider";
import s from "./TaskList.module.css";
import { AddTaskForm } from "../../../features";

export const TaskList = ({ sortPriority, filterStatus }) => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchTasks = async () => {
        try {
            const response = await APIs.task.getTasks();

            // Убедитесь, что response.data существует и является массивом
            const tasksData = response?.data ?? [];

            if (!Array.isArray(tasksData)) {
                throw new Error("Received tasks data is not an array");
            }

            setTasks(tasksData);
        } catch (err) {
            setError(err.message || "Failed to fetch tasks");
            console.error("Error fetching tasks:", err);
            setTasks([]); // Устанавливаем пустой массив в случае ошибки
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchTasks();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    // Проверяем, что tasks — массив
    if (!Array.isArray(tasks)) {
        console.error("Tasks is not an array:", tasks);
        return <div>Error: Tasks data is invalid</div>;
    }

    // Фильтрация по статусу
    const filteredTasks = tasks.filter((task) => {
        if (filterStatus === "all") return true;
        if (filterStatus === "completed") return task.status === true;
        if (filterStatus === "notCompleted") return task.status === false;
        return true;
    });

    // Сортировка по приоритету
    if (sortPriority === "asc") {
        filteredTasks.sort((a, b) => a.priority - b.priority);
    } else if (sortPriority === "desc") {
        filteredTasks.sort((a, b) => b.priority - a.priority);
    }

    return (
        <div className={s.wrapper}>
            <div className={s.create}>
                <AddTaskForm onTaskAdded={fetchTasks} />
                <div className={s.created}>
                    {filteredTasks.reverse().map((task, index) => (
                        <div key={task.id || index}>
                            <Task {...task} onTaskAdded={fetchTasks}/>
                            {index !== filteredTasks.length - 1 && (
                                <DefaultDivider margin="16px" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
