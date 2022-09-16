import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskForm = ({ envioDeLaTarea }) => {
    const [input, setInput] = useState("");

    console.log("Este es el value del input", input);

    // WIP - handleChange
    const handleChange = (e) => {
        // console.log("Event in Form", e);
        // console.log("Target in Form", e.target);
        console.log("Value in Form", e.target.value);
        setInput(e.target.value);
    };

    // WIP - handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault(); //Prevenimos la actualización - SPA
        // console.log("Event on Submit", e);
        // Agregue una tarea nueva
        const newTask = {
            id: uuidv4(),
            title: input,
            completed: false,
        };
        saveTask(newTask); // INSERTE UN NOMBRE ACORDE PARA ESTA PROP POR FAVOR
        e.target.reset();
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Write your task"
                name="text"
                onChange={handleChange}
            />
            <button>Add Task</button>
        </form>
    );
};
export default TaskForm;
