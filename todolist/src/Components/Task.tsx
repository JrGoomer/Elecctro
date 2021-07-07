import React, { useState } from "react";
import { Checkbox, Button, ListItem, Typography } from "@material-ui/core";

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
    <div className="task-div">
      <div className="checkbox-text-task">
    <input onClick={handleState} type="checkbox" defaultChecked={todo.completed}/>
    <li style={{color: "black"}}>
      {!edit?
      todo.task:
      <input type="text" defaultValue={todo.task}
      onKeyDown={handleKeyPress}/>
      }
    </li>
    </div>
    <div className="checkbox-text-task2">
      <button className="task-button" color="primary" onClick={handleEdit}>edit</button>
      <button className="task-button" color="primary" onClick={handleRemove}>remove</button>
    </div>
    </div>
  );
}

export default Task;