import { PriorityButton, DropDownMenu, TaskActionButton } from "../../../shared";
import s from "./Task.module.css";
import deleteIcon from "./assets/delete.png";
import doneIcon from "./assets/checkmark.png";
import { useState, useRef, useEffect } from "react";
// import { priorityOptions } from "../../../shared";

export const Task = (props) => {
    const [showPriorityMenu, setShowPriorityMenu] = useState(false);
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
        // Ваша логика изменения приоритета
        setShowPriorityMenu(false);
    };

    return (
        <div className={s.wrapper}>
            <TaskActionButton action="done" icon={doneIcon} alt="Done" />
            <div className={s.container}>
                <div>
                    <label className={s.title}>{props.title}</label>
                    <p className={s.description}>{props.description}</p>
                </div>
            </div>

            <div className={s.priorityContainer} ref={priorityMenuRef}>
                <PriorityButton
                    setShowPriorityMenu={setShowPriorityMenu}
                    showPriorityMenu={showPriorityMenu}
                    priorityOptions={priorityOptions}
                    priority={props.priority}
                />

                {showPriorityMenu && (
                    <DropDownMenu priorities={priorityOptions} onSelect={handlePriorityChange} />
                )}
            </div>

            <TaskActionButton action='delete' icon={deleteIcon} alt="Delete" />
        </div>
    );
};