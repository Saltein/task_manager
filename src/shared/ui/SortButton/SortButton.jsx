import { useEffect, useRef } from "react";
import { DropDownMenu } from "../DropDownMenu/DropDownMenu";
import s from "./SortButton.module.css";

export const SortButton = (props) => {
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                props.setShowMenu(false);
            }
        };

        if (props.showMenu) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [props.showMenu]);

    return (
        <div ref={menuRef}>
            <div className={s.wrapper} onClick={() => props.setShowMenu(!props.showMenu)}>
                <img src={props.icon} alt="Sort icon" />
            </div>
            {props.showMenu && (
                <DropDownMenu
                    priorities={props.options}
                    onSelect={(value) => {
                        props.onChange(value);
                        props.setShowMenu(false);
                    }}
                />
            )}
        </div>
    );
};