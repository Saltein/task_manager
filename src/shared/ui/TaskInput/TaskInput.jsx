// TaskInput.jsx
import { useRef, useEffect } from 'react';
import s from "./TaskInput.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { setTitle, setDescription } from '../../../features/AddTaskForm/model/addTaskFormSlice';

export const TaskInput = ({ placeholder, oneLine }) => {
    const dispatch = useDispatch();
    const textareaRef = useRef(null);

    const value = useSelector((state) =>
        placeholder === 'Заголовок' ? state.addTaskForm.title : state.addTaskForm.description
    );

    const handleChange = (e) => {
        const newValue = e.target.value;
        if (placeholder === 'Заголовок') {
            dispatch(setTitle(newValue));
        } else {
            dispatch(setDescription(newValue));
        }
    };

    const adjustHeight = () => {
        const textarea = textareaRef.current;
        if (!oneLine) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        } else {
            textarea.style.height = '24px';
        }
    };

    useEffect(() => {
        adjustHeight();
    }, [value]);

    return (
        <div className={s.wrapper}>
            <textarea
                ref={textareaRef}
                className={s.input}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />
        </div>
    );
};
