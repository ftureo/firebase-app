import { AiOutlineCloseCircle } from "react-icons/ai";
import "../styles/Task.css";

const Task = ({ id, title, completed, deleteTask, completedTask }) => {
    return (
        <div className={completed ? "task completed" : "task"}>
            <h1 onClick={() => completedTask(id)}>{id}</h1>
            <h2>{title}</h2>
            <div onClick={() => deleteTask(id)}>
                <AiOutlineCloseCircle className="icon-delete" />
            </div>
        </div>
    );
};
export default Task;
