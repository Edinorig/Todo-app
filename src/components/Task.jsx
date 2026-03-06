import React from "react";
import "./task.css";

function Task({ props, handleDone, handleRename, handleTaskChange }) {

  return (
    <div className="taskWrapper">
      {props.isRename ? (
        <div className="renameWrapper">
          <div className="headerTaskIsRename">
            <input
              type="text"
              className="tittleTask"
              value={props.tittle}
              onChange={(e) =>
                handleTaskChange(props.id, "tittle", e.target.value)
              }
            />
            <input
              type="date"
              className="dueDateTask"
              value={props.dueDate}
              onChange={(e) =>
                handleTaskChange(props.id, "dueDate", e.target.value)
              }
            />
          </div>
          <div className="bodyTask">
            <textarea
              type="text"
              value={props.body}
              onChange={(e) =>
                handleTaskChange(props.id, "body", e.target.value)
              }
            />
          </div>
        </div>
      ) : (
        <div className="renameWrapper">
          <div className="headerTask">
            <h2 className="tittleTask">{props.tittle}</h2>
            <div className="dueDateTask">{props.dueDate}</div>
          </div>
          <div className="bodyTask">
            <p>{props.body}</p>
          </div>
        </div>
      )}
      <div className="footerTask">
        <button onClick={() => handleDone(props.id)} disabled={props.isRename}>
          Delete
        </button>
        <button onClick={() => handleRename(props.id)}>
          {props.isRename ? "Save" : "Rename"}
        </button>
        <button onClick={() => handleDone(props.id)} disabled={props.isRename}>
          Done
        </button>
      </div>
    </div>
  );
}

export default Task;
