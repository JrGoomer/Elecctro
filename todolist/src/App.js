import React, { useEffect,useState } from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import background from "./backgroundImage.jpg";
import "./App.css";

const LOCAL_STORAGE_KEY = "ToDoList"

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  }, []);


  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  }

  return (
    <div className="App" style={{
      backgroundImage: `url(${background})`,
      }}>
      <header className="App-header">
        <span><p>Todo List</p></span>
        <TodoInput className="Input" addTodo={addTodo} />
        <TodoList todos={todos}/>
      </header>
    </div>
  );
}

export default App;
