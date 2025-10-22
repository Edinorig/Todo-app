import React from "react";
import { useState } from "react";
import { differenceInDays } from "./util.js";

const dueDateColors = {
  overdue: "text-red-600",
  dueToday: "text-yellow-500",
  upcoming: "text-green-600",
};

const CardTask = ({
  tasks,
  handleDelete,
  handleEdittask,
  handleBack,
  handleDone,
}) => {
  const [tittle, setTittle] = useState("");
  const [body, setBody] = useState("");

  const handleChangeTittle = (e) => {
    setTittle(e.target.value);
  };

  const handleChangeBody = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (id, tittle, body, previusTittle, previusBody) => {
    if (previusTittle === tittle && previusBody === body) {
      console.log("No changes made, task remains the same.");
      handleEdittask(id, previusTittle, previusBody);
    } else if (tittle.trim() === "" && body.trim() === "") {
      handleEdittask(id, previusTittle, previusBody);
    } else {
      handleEdittask(id, tittle, body);
      setTittle("");
      setBody("");
    }
  };

  const setDoneTask = (id, status) => {
    handleDone(id, status);
  };

  const colorDueDate = (dueDate) => {
    const daysDiff = differenceInDays(dueDate);

    console.log(daysDiff);

    if (daysDiff < 0) {
      return dueDateColors.overdue;
    } else if (
      daysDiff === 0 ||
      daysDiff === 1 ||
      daysDiff === 2 ||
      daysDiff === 3
    ) {
      return dueDateColors.dueToday;
    } else {
      return dueDateColors.upcoming;
    }
  };
  console.log(tasks);

  return (
    <div className="grid grid-cols-2 gap-4">
      {tasks.map((item) => (
        <div
          key={item.id}
          className={`showTask ${
            item.status === "done" ? "bg-emerald-800" : "bg-BackgroundTaskGray"
          } w-[350px] h-72 rounded-md p-4 flex flex-col justify-between`}
        >
          {item.isEditing ? (
            <>
              <input
                type="text"
                className="border-2 rounded-sm border-BorderColor p-2 placeholder-white text-white"
                defaultValue={item.tittle}
                onChange={handleChangeTittle}
              />
              <textarea
                className="border-2 rounded-sm border-BorderColor p-2 placeholder-white text-white h-36"
                name="taskBody"
                id="taskBody"
                defaultValue={item.body}
                onChange={handleChangeBody}
              ></textarea>

              <div className="wrapperButtons flex flex-row justify-end gap-2">
                <button
                  className="bg-blue-500 h-8"
                  onClick={() => handleBack(item.id)}
                >
                  Back
                </button>
                <button
                  className="bg-teal-700 h-8"
                  onClick={() =>
                    handleSubmit(item.id, tittle, body, item.tittle, item.body)
                  }
                >
                  Save
                </button>
                <button
                  className="bg-red-700  h-8"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className="tittleTask flex flex-row justify-between items-center">
                <h2 className="text-2xl text-white">{item.tittle}</h2>
                <h4 className="text-sm text-white flex flex-row gap-1">
                  <p className={`${colorDueDate(item.duesDate)}`}>
                    Due Date {differenceInDays(item.duesDate)}
                  </p>
                </h4>
              </div>
              <p className="text-xl text-white">{item.body}</p>
              <div className="wrapper flex flex-row justify-between">
                <div className="wrapperDueTo text-md text-white">
                  <p>Due to {item.duesDate}</p>
                </div>
                <div className="interecativeTask flex flex-col gap-2 justify-end x">
                  <button
                    onClick={() => setDoneTask(item.id, item.status)}
                    className="doneTask bg-teal-700  h-8"
                  >
                    <p className="py-1 px-2">
                      {item.status === "done" ? "Undo" : "Done"}
                    </p>
                  </button>
                  <button
                    className="bg-amber-800 h-8"
                    onClick={() =>
                      handleEdittask(item.id, item.tittle, item.body)
                    }
                  >
                    <p className="py-1 px-2">Edit </p>
                  </button>
                  <button
                    className="bg-red-700  h-8"
                    onClick={() => handleDelete(item.id)}
                  >
                    <p className="py-1 px-2">Delete</p>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardTask;
