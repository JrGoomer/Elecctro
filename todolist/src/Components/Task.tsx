import React, { useState } from "react";

function Task({ todo,editTask,editState,removeTodo } : {todo:any,removeTodo:any,editState:any,editTask:any}) {

  const [input, setInput] = useState(todo.task);
  const [edit, setEdit] = useState(0);


  const handleState = (e:any) => {
    editState(todo.id);
  };

  const handleEdit = (e:any) => {
    setEdit(1);
  };

  const handleRemove = (e:any) => {
    removeTodo(todo.id);
  };

  const handleKeyPress = (e:any) => {
    if(e.key === 'Enter'){
      setEdit(0);
      editTask({...todo, task: e.target.value});
    }
    
  }

  
  return (
    <div style={{display: "flex",
    backgroundColor: "white" }}>
    <input onClick={handleState} type="checkbox" defaultChecked={todo.completed}/>
    <li style={{color: "black"}}>
      {!edit?
      todo.task:
      <input type="text" defaultValue={todo.task}
      onKeyDown={handleKeyPress}/>
      }
      </li>
      <button onClick={handleEdit}>edit</button>
      <button onClick={handleRemove}>remove</button>
    </div>
  );
}

export default Task;