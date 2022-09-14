import TaskList from "./components/TaskList";
import "./styles/App.css";

function App() {
    return (
        <div className="App">
            {/* Evaluar si se puede hacer un componente */}
            <div className="containerLogo">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/3209/3209265.png"
                    alt="logo-notas"
                />
            </div>
            <div>
                <h1>Lista de Tareas</h1>
                <TaskList />
            </div>
        </div>
    );
}

export default App;
