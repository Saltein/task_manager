import { useState, useEffect, useRef } from 'react';
import s from "./TaskInput.module.css";

export const TaskInput = ({ placeholder, oneLine }) => {
    const [value, setValue] = useState('');
    const textareaRef = useRef(null);

    const adjustHeight = () => {
        const textarea = textareaRef.current;
        if (!oneLine) {
            textarea.style.height = 'auto'; 
            textarea.style.height = `${textarea.scrollHeight}px` // Устанавливаем новую высоту
        }
        else textarea.style.height = '24px'
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
            onChange={(e) => setValue(e.target.value)}
        />
    </div>
);
};
