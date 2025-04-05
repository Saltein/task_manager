import { useState } from "react";
import s from "./SortingPanel.module.css";
import { DefaultDivider, DropDownMenu, SortButton } from "../../../shared";
import sortIcon from "../assets/sort.png"
import swapIcon from "../assets/swap.png"


const priorityOptions = [
  { value: "none", label: "Без сортировки", color: "#ccc" },
  { value: "asc", label: "По возрастанию", color: "#4caf50" },
  { value: "desc", label: "По убыванию", color: "#f44336" },
];

const statusOptions = [
  { value: "all", label: "Все", color: "#ccc" },
  { value: "completed", label: "Выполнено", color: "#4caf50" },
  { value: "notCompleted", label: "Не выполнено", color: "#f44336" },
];

export const SortingPanel = ({
  sortPriority,
  filterStatus,
  onSortPriorityChange,
  onFilterStatusChange,
}) => {
  const [showPriorityMenu, setShowPriorityMenu] = useState(false);
  const [showStatusMenu, setShowStatusMenu] = useState(false);

  const currentPriority = priorityOptions.find((opt) => opt.value === sortPriority);
  const currentStatus = statusOptions.find((opt) => opt.value === filterStatus);

  return (
    <div className={s.wrapper}>
      <div className={s.dropdown}>
        <SortButton icon={swapIcon} setShowMenu={setShowPriorityMenu}
          showMenu={showPriorityMenu} options={priorityOptions}
          onChange={onSortPriorityChange} />
      </div>

        <DefaultDivider vertical margin='16px' />
      <div className={s.dropdown}>
        <SortButton icon={sortIcon} setShowMenu={setShowStatusMenu}
          showMenu={showStatusMenu} options={statusOptions}
          onChange={onFilterStatusChange} />
      </div>
    </div>
  );
};
