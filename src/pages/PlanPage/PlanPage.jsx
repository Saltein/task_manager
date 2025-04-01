import { SortingPanel } from "../../features";
import { TaskList } from "../../widgets";
import s from "./PlanPage.module.css";

export const PlanPage = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.tasksWrapper}>
                <SortingPanel/>
                <TaskList/>
            </div>
            <div className={s.timerWrapper}>
                timer
            </div>
        </div>
    )
}