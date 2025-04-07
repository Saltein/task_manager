import s from "./AddTaskForm.module.css"
import addIcon from "../assets/add.png"
import { useEffect, useState, useRef } from "react";
import { PriorityButton, DropDownMenu, TaskActionButton, TaskInput, APIs } from "../../../shared";
import { useDispatch, useSelector } from 'react-redux';
import { resetForm, selectDescription, selectPriority, selectTitle } from "../../../features/AddTaskForm/model/addTaskFormSlice";
// import { priorityOptions } from "../../../shared";

const API_URL = process.env.REACT_APP_API_URL;

export const AddTaskForm = (props) => {
    // STATES
    const [addMode, setAddMode] = useState(false);
    const [showPriorityMenu, setShowPriorityMenu] = useState(false);
    const [taskPriority, setTaskPriority] = useState(4)

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
    const title = useSelector(selectTitle);
    const description = useSelector(selectDescription);
    const priority = useSelector(selectPriority);

    // HANDLERS
    const onAddModeHandler = () => {
        setAddMode(!addMode);

    };

    const handlePriorityChange = (newPriority) => {
        setTaskPriority(newPriority)
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
        };

        try {
            console.log("JSON.stringify(newTask)", JSON.stringify(newTask))
            const response = await APIs.task.addTask(JSON.stringify(newTask))

            const result = await response.json;
            console.log("Сервер вернул:", result);

            dispatch(resetForm());
            setAddMode(false);
        } catch (error) {
            console.error("Ошибка при отправке задачи:", error);
        }
    };

    useEffect(() => {
        setTaskPriority(priority)
    }, [])

    // EFFECTS
    useEffect(() => {
        console.log("Состояние addMode изменилось на", addMode)
    }, [addMode])

    return (
        <div className={s.createTask}>
            {addMode && (
                <div className={`${s.addTaskForm} ${addMode ? s.active : ''}`}>
                    <div className={s.inputs}>
                        <TaskInput placeholder="Заголовок" oneLine />
                        <TaskInput placeholder="Описание" />
                    </div>
                    <div className={s.priorityContainer} ref={priorityMenuRef}>
                        <PriorityButton
                            setShowPriorityMenu={setShowPriorityMenu}
                            showPriorityMenu={showPriorityMenu}
                            priorityOptions={priorityOptions}
                            priority={taskPriority}
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
