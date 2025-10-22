import React from "react";
import { useState } from "react";

const AddTask = ({ onAddTasks }) => {
  const [tittleTask, setTittleTask] = useState("");
  const [bodyTask, setBodyTask] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleChangeTittle = (e) => {
    setTittleTask(e.target.value);
  };

  const handleChangeBody = (e) => {
    setBodyTask(e.target.value);
  };

  const handleChangeDueDate = (e) => {
    setDueDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: crypto.randomUUID(),
      status: "pending",
      tittle: tittleTask,
      body: bodyTask,
      duesDate: dueDate,
      isEditing: false,
    };
    onAddTasks(newTask);
    setTittleTask("");
    setBodyTask("");
    setDueDate("");
  };

  return (
    <div className="addTask flex flex-col w-82">
      <h1>Add Task Component</h1>
      <form
        onSubmit={handleSubmit}
        name="addTask"
        className="flex flex-col gap-4"
      >
        <div className="wraperInputTask gap-2 flex flex-col">
          <input
            name="Title"
            className="border-2 rounded-sm border-BorderColor p-2 placeholder-white"
            type="text"
            value={tittleTask}
            onChange={handleChangeTittle}
            placeholder="Title"
            required
          />
          <textarea
            name="Body"
            id="Body"
            className="border-2 rounded-sm border-BorderColor p-2 placeholder-white h-40"
            value={bodyTask}
            onChange={handleChangeBody}
            placeholder="Body"
            required
          ></textarea>
          <input
            className="border-2 rounded-sm border-BorderColor p-2 placeholder-white"
            type="date"
            name="duedate"
            id="duedate"
            placeholder="Due Date"
            value={dueDate}
            onChange={handleChangeDueDate}
            required
          />
        </div>
        <button
          className="py-3 px-20 bg-BorderColor text-white cursor-pointer rounded-md"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTask;
