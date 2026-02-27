import React from "react";
import "./task.css";

function Task({ props, handleDone }) {
  console.log(props.id);
  
  
  return (
      <div className="taskWrapper">
        <div className="headerTask">
          <h2 className="tittleTask">{props.tittle}</h2>
          <div className="dueDateTask">{props.due}</div>
        </div>
        <div className="bodyTask">
          <p>{props.body}</p>
        </div>
        <div className="footerTask">
          <button onClick={() => handleDone(props.id)}>Done</button>
          <button>Rename</button>
          <button onClick={() => handleDone(props.id)}>Delete</button>
        </div>
      </div>
  );
}

export default Task;
