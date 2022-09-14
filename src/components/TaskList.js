import { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";

const TaskList = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Tarea 1",
            description: "Descripción de la tarea 1",
            completed: false,
        },
        {
            id: 2,
            title: "Tarea 2",
            description: "Descripción de la tarea 2",
            completed: false,
        },
    ]);

    return (
        <div>
            <TaskForm />
            <div className="taskContainer">
                {tasks.map((task) => {
                    return (
                        <Task
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            description={task.description}
                            completed={task.completed}
                        />
                    );
                })}
            </div>
        </div> //Esto es un fragment
    );
};
export default TaskList;
