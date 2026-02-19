import React from "react";
import "./task.css";

function Task() {
  return (
    <div className="taskWrapper">
      <div className="headerTask">
        <h2 className="tittleTask">Do homework</h2>
        <div className="dueDateTask">3 days left</div>
      </div>
      <div className="bodyTask">
        <p>Do four exercize for math and aftercreate anoter axercise</p>
      </div>
      <div className="footerTask">
        <button>Done</button>
        <button>Rename</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default Task;
