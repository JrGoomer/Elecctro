import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function TodoInput({ addTodo } : { addTodo: any}) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false
  });

  const handleInput = (e: { target: { value: any; }; }) => {
    setTodo({...todo, task: e.target.value})
  }

  const handleSubmit =  (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if(todo.task !== ""){
      addTodo({...todo, id: uuidv4()});
      setTodo({...todo, task:""});
    }
  }

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
      name="task"
      type="task"
      value = {todo.task}
      onChange={handleInput}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoInput;