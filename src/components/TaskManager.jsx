import React from "react";
import CardTask from "./cardTask";
import AddTask from "./addTask";
import { useState } from "react";
import Login from "./Login";

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    {
      id: crypto.randomUUID(),
      status: "pending",
      tittle: "First Task",
      body: "This is the body of the first task",
      isEditing: false,
      duesDate: "2026-12-31",
    },
    {
      id: crypto.randomUUID(),
      status: "pending",
      tittle: "Second Task",
      body: "This is the body of the second task",
      isEditing: false,
      duesDate: "2025-12-30",
    },
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleDone = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            status: task.status === "done" ? "pending" : "done",
          };
        }
        return task; 
      })
    );
  };

  const handleBack = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isEditing: !task.isEditing,
          };
        }
        return task;
      })
    );
  };

  const handleEdittask = (id, title, body) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            tittle: title,
            body: body,
            isEditing: !task.isEditing,
          };
        }
        return task;
      })
    );
  };

  return (
    <div className="flex flex-col h-full">
      <Login />
      <div className="taskWrapper flex lg:flex-row  m-10 sm:flex-col  sm:gap-6 gap-44">
        <AddTask onAddTasks={addTask} />
        <CardTask
          tasks={tasks}
          handleDelete={handleDelete}
          handleEdittask={handleEdittask}
          handleBack={handleBack}
          handleDone={handleDone}
        />
      </div>
    </div>
  );
};

export default TaskManager;
