import { PriorityButton, DropDownMenu, TaskActionButton } from "../../../shared";
import s from "./Task.module.css";
import deleteIcon from "./assets/delete.png";
import doneIcon from "./assets/checkmark.png";
import { useState, useRef, useEffect } from "react";
// import { priorityOptions } from "../../../shared";

export const Task = (props) => {
    const [showPriorityMenu, setShowPriorityMenu] = useState(false);

    const [taskStatus, setTaskStatus] = useState(false)
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskPriority, setTaskPriority] = useState('')

    const priorityMenuRef = useRef(null);

    const priorityOptions = [
        { value: 1, label: "Высокий", color: "#ff4d4d" },
        { value: 2, label: "Средний", color: "#ffa64d" },
        { value: 3, label: "Низкий", color: "#4d79ff" },
        { value: 4, label: "Очень низкий", color: "#cccccc" },
    ];

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

    const handlePriorityChange = (newPriority) => {
        setTaskPriority(newPriority)
        setShowPriorityMenu(false);
    };

    const handleStatusChange = () => {
        setTaskStatus(!taskStatus)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <label className={s.title}>{props.title}</label>
                <p className={s.description}>{props.description}</p>

                <input/>
                <textarea/>
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
            <TaskActionButton action='delete' icon={deleteIcon} alt="Delete" />
        </div>
    );
};