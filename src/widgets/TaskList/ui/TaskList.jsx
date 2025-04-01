import { Task } from "../../../entities/task"
import { DefaultDivider } from "../../../shared/ui/DefaultDivider/DefaultDivider"
import s from "./TaskList.module.css"

const data = {
    tasks: [
        { id: 1, title: "title 1", description: "description 1", priority: 1, status: false, pomodoros: 3 },
        { id: 2, title: "title 2", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", priority: 2, status: false, pomodoros: 3 },
        { id: 3, title: "title 3", description: "description 3", priority: 3, status: false, pomodoros: 3 },
        { id: 4, title: "title 4", description: "description 4", priority: 4, status: false, pomodoros: 3 },
        { id: 4, title: "title 4", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", priority: 4, status: false, pomodoros: 3 },
        { id: 4, title: "title 4", description: "description 4", priority: 4, status: false, pomodoros: 3 },
        { id: 4, title: "title 4", description: "description 4", priority: 4, status: false, pomodoros: 3 },
        { id: 4, title: "title 4", description: "description 4", priority: 4, status: false, pomodoros: 3 },
        { id: 4, title: "title 4", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", priority: 4, status: false, pomodoros: 3 },
        { id: 4, title: "title 4", description: "description 4", priority: 4, status: false, pomodoros: 3 },
        { id: 4, title: "title 4", description: "description 4", priority: 4, status: false, pomodoros: 3 },
        { id: 4, title: "title 4", description: "description 4", priority: 4, status: false, pomodoros: 3 },
        { id: 4, title: "title 4", description: "description 4", priority: 4, status: false, pomodoros: 3 },
    ]
}

export const TaskList = (props) => {
    return (
        <div className={s.wrapper}>
            {data.tasks.map((task, index) => (
                <div key={task.id}>
                    <Task {...task} /> {/* {...task} — это синтаксис spread-оператора (...) в JSX, 
                    который используется для передачи всех свойств объекта task в компонент Task в виде отдельных пропсов. */}
                    {index !== data.tasks.length - 1 && <DefaultDivider margin="16px" />}
                </div>
            ))}
        </div>
    )
}