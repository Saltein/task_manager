import { useState, useEffect, useRef } from "react";
import s from "./DropDownMenu.module.css";

export const DropDownMenu = (props) => {
    const menuRef = useRef(null);

    useEffect(() => {
        const adjustPosition = () => {
            const menuEl = menuRef.current;
            const parentRect = menuEl.parentNode.getBoundingClientRect();
            const menuRect = menuEl.getBoundingClientRect();

            if (menuRect.top < parentRect.top) {
                menuEl.style.top = `${parentRect.top}px`;
            }
            if (menuRect.bottom > parentRect.bottom) {
                menuEl.style.top = `${parentRect.bottom - menuRect.height + menuRect.height}px`;
            }
            if (menuRect.left < parentRect.left) {
                menuEl.style.left = `${parentRect.left}px`
            }
            if (menuRect.right > parentRect.right) {
                menuEl.style.left = `${parentRect.right - menuRect.width}px`
            }
        };

        adjustPosition();
    }, []);

    const handleSelect = (value) => {
        props.onSelect(value);
    };

    return (
        <div className={s.menu} ref={menuRef}>
            {props.priorities.map(({ value, label, color }) => (
                <div
                    key={value}
                    className={s.option}
                    onClick={() => handleSelect(value)}
                >
                    <span className={s.dot} style={{ backgroundColor: color }} />
                    {label}
                </div>
            ))}
        </div>
    );
};
