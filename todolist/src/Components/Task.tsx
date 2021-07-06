import React, { useState } from "react";

function Task({ todo,editTask,editState,removeTodo } : {todo:any,removeTodo:any,editState:any,editTask:any}) {

  const [input, setInput] = useState(todo.task);

  const handleState = (e:any) => {
    console.log(todo.id);
    editState(todo.id);
  };

  const handleEdit = (e:any) => {
    editTask(e.target.value);
  };
  const handleRemove = (e:any) => {
    removeTodo(todo.id);
  };


  return (
    <div style={{display: "flex",
    backgroundColor: "white" }}>
    <input onClick={handleState} type="checkbox" defaultChecked={todo.completed}/>
    <li style={{color: "black"}}>
      {todo.task}
      </li>
      <button onClick={handleEdit}>edit</button>
      <button onClick={handleRemove}>remove</button>
    </div>
  );
}

export default Task;