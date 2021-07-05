import React, { useState } from "react";

function Task({ todo } : {todo:any}) {

  return (
    <div style={{display: "flex"}}>
    <input type="checkbox" />
    <ul >
      {todo.task}
      </ul>
      <button>edit</button>
      <button>remove</button>
    </div>
  );
}

export default Task;