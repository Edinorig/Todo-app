import React, { useState } from "react";
import "./AddTask.css";

function AddTask({ props, handleAddTask }) {
  const [task, setTask] = useState({ tittle: "", body: "", time: "" });

  const addTask = (e) => {
    e.preventDefault();
    const taskBeta = {
      id: crypto.randomUUID(),
      tittle: task.tittle,
      dueDate: task.time,
      body: task.body,
    };
    handleAddTask(taskBeta);
    setTask({ tittle: "", body: "", time: "" });
  };

  return (
    <form className="wrapperAddTask" onSubmit={addTask}>
      <input
        type="text"
        placeholder="Task Title"
        className="inputTaskTitle"
        value={task.tittle}
        onChange={(e) => setTask({ ...task, tittle: e.target.value })}
        required
      />

      <textarea
        placeholder="Task Body"
        className="inputTaskBody"
        value={task.body}
        onChange={(e) => setTask({ ...task, body: e.target.value })}
        required
      />

      <input
        type="date"
        className="inputTaskTime"
        value={task.time}
        onChange={(e) => setTask({ ...task, time: e.target.value })}
        required
      />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;
