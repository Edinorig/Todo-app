import React from "react";
import './AddTask.css'

function AddTask() {
  return (
    <div className="wrapperAddTask">
      <input type="text" placeholder="Taks Tittle" className="inputTaskTittle"/>
      <textarea name="bodyTask" id="bodyTask" placeholder="Task Body" className="inputTaskBody"></textarea>
      <button>Add Task</button>
    </div>
  );
}

export default AddTask;
