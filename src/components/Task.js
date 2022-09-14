const Task = ({ id, title, description, completed }) => {
    return (
        <div className="task">
            <h1>{id}</h1>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{completed}</p>
        </div>
    );
};
export default Task;
