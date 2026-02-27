import "./App.css";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [task, setTask] = useState([
    {
      id: crypto.randomUUID(),
      tittle: "Do Homework",
      dueDate: "3 days left",
      body: "Do four exercize for math and aftercreate anoter axercise",
    },
    {
      id: crypto.randomUUID(),
      tittle: "Worckout",
      dueDate: "13 days left",
      body: "Do jym all the day",
    },
  ]);

  const handleAddTask = (value) => {
    console.log(value);

    setTask((event) => [...event, value]);
    console.log("Here is taks" + task);
  };

  const handleDone = (value) => {
    setTask((event) => {
      return event.filter((el) => {
        if (el.id !== value) {
          return el;
        }
      });
    });
  };

  const handleRename = (value) => {
    
  }

  return (
    <div className="app">
      <div className="wrapperMain">
        <AddTask props={task} handleAddTask={handleAddTask} />
        <div className="wrapperTasks">
          {task.map((value) => (
            <Task props={value} key={value.id} handleDone={handleDone} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
