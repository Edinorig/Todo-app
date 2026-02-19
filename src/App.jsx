import "./App.css";
import Task from "./components/Task";
import AddTask from "./components/AddTask";

function App() {
  return (
    <div className="app">
      <div className="wrapperMain">
        <AddTask />
        <div className="wrapperTasks">
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
      </div>
    </div>
  );
}

export default App;
