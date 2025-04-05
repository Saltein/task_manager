import { PriorityButton, PriorityMenu, TaskActionButton } from "../../../shared";
import s from "./Task.module.css";
import deleteIcon from "./assets/delete.png";
import doneIcon from "./assets/checkmark.png";
import { useState } from "react";

export const Task = (props) => {
    const [showPriorityMenu, setShowPriorityMenu] = useState(false);

    const priorityOptions = [
        { value: 1, label: "Высокий", color: "#ff4d4d" },
        { value: 2, label: "Средний", color: "#ffa64d" },
        { value: 3, label: "Низкий", color: "#4d79ff" },
        { value: 4, label: "Очень низкий", color: "#cccccc" },
    ];

    const handlePriorityChange = (newPriority) => {

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

            <div className={s.priorityContainer}>
                <PriorityButton
                    setShowPriorityMenu={setShowPriorityMenu}
                    showPriorityMenu={showPriorityMenu}
                    priorityOptions={priorityOptions}
                    priority={props.priority}
                />

                {showPriorityMenu && (
                    <PriorityMenu priorities={priorityOptions} onSelect={handlePriorityChange} />
                )}
            </div>

            <TaskActionButton action='delete' icon={deleteIcon} alt="Delete" />
        </div>
    );
};