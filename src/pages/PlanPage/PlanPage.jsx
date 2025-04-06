import { useState } from "react";
import { SortingPanel } from "../../features";
import { DefaultDivider } from "../../shared/ui/DefaultDivider/DefaultDivider";
import { TaskList, TimerWidget } from "../../widgets";
import s from "./PlanPage.module.css";

export const PlanPage = (props) => {
  const [sortPriority, setSortPriority] = useState("none"); // "none", "asc", "desc"
  const [filterStatus, setFilterStatus] = useState("all"); // "all", "completed", "notCompleted"

  return (
    <div className={s.wrapper}>
      <div className={s.tasksWrapper}>
        <SortingPanel
          sortPriority={sortPriority}
          filterStatus={filterStatus}
          onSortPriorityChange={setSortPriority}
          onFilterStatusChange={setFilterStatus}
        />
        <TaskList sortPriority={sortPriority} filterStatus={filterStatus} />
      </div>
      <DefaultDivider margin="32px" />
      <div className={s.timerWrapper}>
        <TimerWidget />
      </div>
    </div>
  );
};
