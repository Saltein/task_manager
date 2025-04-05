import s from "./AddTaskForm.module.css"
import addIcon from "../assets/add.png"
import { useEffect, useState } from "react";
import { TaskActionButton, TaskInput } from "../../../shared";

export const AddTaskForm = (props) => {
    // СОСТОЯНИЯ
    const [addMode, setAddMode] = useState(false);

    // ХЕНДЛЕРЫ
    const onAddModeHandler = () => {
        setAddMode(!addMode)
    }

    // ЭФФЕКТЫ
    useEffect(() => {
        console.log("Состояние addMode изменилось на", addMode)
    }, [addMode])

    return (
        <div className={s.createTask}>
            {addMode && (
                <div className={s.addTaskForm}>
                    <TaskActionButton action="done" icon={addIcon} alt="Done" />
                    <div className={s.inputs}>
                        <TaskInput placeholder="Заголовок" oneLine />
                        <TaskInput placeholder="Описание" />
                    </div>
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