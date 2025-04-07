import { PriorityButton, DropDownMenu, TaskActionButton, APIs } from "../../../shared";
import s from "./Task.module.css";
import deleteIcon from "./assets/delete.png";
import doneIcon from "./assets/checkmark.png";
import { useState, useRef, useEffect } from "react";

export const Task = (props) => {
    const [showPriorityMenu, setShowPriorityMenu] = useState(false);

    const [taskStatus, setTaskStatus] = useState(false)
    const [taskTitle, setTaskTitle] = useState(props.title || '')
    const [taskDescription, setTaskDescription] = useState(props.description || '')
    const [taskPriority, setTaskPriority] = useState('')

    const priorityMenuRef = useRef(null);
    const textareaRef = useRef(null);

    const priorityOptions = [
        { value: 1, label: "Высокий", color: "#ff4d4d" },
        { value: 2, label: "Средний", color: "#ffa64d" },
        { value: 3, label: "Низкий", color: "#4d79ff" },
        { value: 4, label: "Очень низкий", color: "#cccccc" },
    ];

    const handlePriorityChange = (newPriority) => {

        setShowPriorityMenu(false);
    };

    const handleStatusChange = () => {
        setTaskStatus(!taskStatus)
    }

    const handleDelete = async () => {
        const taskData = {
            id: props.id
        }
        try {
            const response = await APIs.task.deleteTask(JSON.stringify(taskData))
            const result = await response.json;
            console.log("Сервер вернул:", result);
        }
        catch (error) {
            console.error("Ошибка при удалении задачи:", error);
        }
    }

    const handleTitleChange = (e) => {
        setTaskTitle(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setTaskDescription(e.target.value)
    }

    const adjustHeight = () => {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (priorityMenuRef.current && !priorityMenuRef.current.contains(event.target)) {
                setShowPriorityMenu(false);
            }
        };

        if (showPriorityMenu) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showPriorityMenu]);

    useEffect(() => {
        adjustHeight();
    }, [taskDescription]);

    useEffect(() => {
        const handleResize = () => {
            adjustHeight();
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <input className={s.title} value={taskTitle} onChange={handleTitleChange} />
                <textarea
                    className={s.description}
                    spellCheck="false"
                    value={taskDescription}
                    ref={textareaRef}
                    onChange={handleDescriptionChange}
                />
            </div>

            <div className={s.priorityContainer} ref={priorityMenuRef}>
                <PriorityButton
                    setShowPriorityMenu={setShowPriorityMenu}
                    showPriorityMenu={showPriorityMenu}
                    priorityOptions={priorityOptions}
                    priority={taskPriority || props.priority}
                />

                {showPriorityMenu && (
                    <DropDownMenu priorities={priorityOptions} onSelect={handlePriorityChange} />
                )}
            </div>
            <TaskActionButton action={taskStatus ? "done" : "do"} icon={doneIcon} alt="Done" onClick={handleStatusChange} />
            <TaskActionButton action='delete' icon={deleteIcon} alt="Delete" oncLick={handleDelete} />
        </div>
    );
};