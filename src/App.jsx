import "./App.css";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [task, setTask] = useState([
    {
      id: crypto.randomUUID(),
      tittle: "Do Homework",
      dueDate: "3 days left",
      body: "Do four exercize for math and aftercreate anoter axercise",
      isRename: false,
      isCompleted: false,
    },
    {
      id: crypto.randomUUID(),
      tittle: "Worckout",
      dueDate: "13 days left",
      body: "Do jym all the day",
      isRename: false,
      isCompleted: false,
    },
  ]);

  const handleAddTask = (value) => {
    setTask((event) => [...event, value]);
  };

  const totalTask = task.length;
  const doneTasks = task.filter((event) => event.isCompleted).length
  const activeTasks = task.filter((event) => !event.isCompleted).length

  const handleDone = (id) => {
    console.log(id);
    
    setTask((event) => {
      return event.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            isCompleted: !el.isCompleted,
          }
        }
        return el;
      });
    });
  };

  const handleRename = (id, tittle, dueDate, bodyText) => {
    setTask((event) => {
      return event.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            isRename: !el.isRename,
          };
        }
        return el;
      });
    });
  };

  const handleTaskChange = (id, filed, value) => {
    setTask((prev) => {
      return prev.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            [filed]: value,
          };
        }
        return el;
      });
    });
  };

  return (
    <div className="app">
      <Counter counter={totalTask} counterName={"Total"}/>
      <Counter counter={doneTasks} counterName={"Done"}/>
      <Counter counter={activeTasks} counterName={"Active"}/>
      {/* <Counter counter={task} counterName={"Total"}/> */}
      <div className="wrapperMain">
        <AddTask props={task} handleAddTask={handleAddTask} />
        <div className="wrapperTasks">
          {task.map((value) => (
            <Task
              props={value}
              key={value.id}
              handleDone={handleDone}
              handleRename={handleRename}
              handleTaskChange={handleTaskChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
