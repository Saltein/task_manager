import s from "./AddTaskForm.module.css"
import addIcon from "../assets/add.png"
import { useEffect, useState, useRef } from "react";
import { PriorityButton, DropDownMenu, TaskActionButton, TaskInput } from "../../../shared";
import { useDispatch, useSelector } from 'react-redux';
import { resetForm } from "../../../features/AddTaskForm/model/addTaskFormSlice";
// import { priorityOptions } from "../../../shared";

const API_URL = process.env.REACT_APP_API_URL;

export const AddTaskForm = (props) => {
    // STATES
    const [addMode, setAddMode] = useState(false);
    const [showPriorityMenu, setShowPriorityMenu] = useState(false);

    // REFS
    const priorityMenuRef = useRef(null);

    // VARIABLES
    const dispatch = useDispatch();

    const priorityOptions = [
        { value: 1, label: "Высокий", color: "#ff4d4d" },
        { value: 2, label: "Средний", color: "#ffa64d" },
        { value: 3, label: "Низкий", color: "#4d79ff" },
        { value: 4, label: "Очень низкий", color: "#cccccc" },
    ];

    // SELECTORS
    const title = useSelector(state => state.addTaskForm.title);
    const description = useSelector(state => state.addTaskForm.description);

    // HANDLERS
    const onAddModeHandler = () => {
        setAddMode(!addMode);
    };

    const handlePriorityChange = (newPriority) => {
        // Ваша логика изменения приоритета
        setShowPriorityMenu(false);
    };

    const handleSubmit = async () => {
        if (!title.trim()) {
            alert("Введите заголовок");
            return;
        }

        const newTask = {
            title,
            description,
            priority: 1,
            status: false,
            pomodoros: 1
        };

        try {
            const res = await fetch(`${API_URL}/tasks`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTask),
            });

            const result = await res.json();
            console.log("Сервер вернул:", result);

            dispatch(resetForm());
            setAddMode(false);
        } catch (error) {
            console.error("Ошибка при отправке задачи:", error);
        }
    };

    // EFFECTS
    useEffect(() => {
        console.log("Состояние addMode изменилось на", addMode)
    }, [addMode])

    return (
        <div className={s.createTask}>
            {addMode && (
                <div className={s.addTaskForm}>
                    <div className={s.inputs}>
                        <TaskInput placeholder="Заголовок" oneLine />
                        <TaskInput placeholder="Описание" />
                    </div>
                    <div className={s.priorityContainer} ref={priorityMenuRef}>
                        <PriorityButton
                            setShowPriorityMenu={setShowPriorityMenu}
                            showPriorityMenu={showPriorityMenu}
                            priorityOptions={priorityOptions}
                            priority={1}
                        />

                        {showPriorityMenu && (
                            <DropDownMenu priorities={priorityOptions} onSelect={handlePriorityChange} />
                        )}
                    </div>
                    <TaskActionButton action="do" icon={addIcon} alt="Do" onClick={handleSubmit} />
                </div>
            )}

            <div onClick={() => onAddModeHandler()}
                style={{
                    width: addMode ? 'auto' : '100%', display: 'flex',
                    alignItems: 'center', justifyContent: 'center'
                }}
            >
                <img
                    className={s.addImg}
                    src={addIcon}
                    style={{
                        transform: addMode ? 'rotate(45deg)' : '',
                        transition: 'transform 0.3s ease'
                    }}
                />
            </div>
        </div>
    )
}
