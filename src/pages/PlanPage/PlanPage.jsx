import { SortingPanel } from "../../features";
import { DefaultDivider } from "../../shared/ui/DefaultDivider/DefaultDivider";
import { TaskList, TimerWidget } from "../../widgets";
import s from "./PlanPage.module.css";

export const PlanPage = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.tasksWrapper}>
                <SortingPanel />
                <TaskList />
            </div>
            <DefaultDivider margin="32px" />
            <div className={s.timerWrapper}>
                <TimerWidget></TimerWidget>
            </div>
        </div>
    )
}