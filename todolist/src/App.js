import React, { useEffect,useState } from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import background from "./backgroundImage.jpg";
import "./App.css";

const LOCAL_STORAGE_KEY = "ToDoList"

function App() {
  const [todos, setTodos] = useState([]);
  const [completed,setCompleted] = useState(false);

  useEffect(()=>{
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  }, []);


  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  }

  const editTodo = (todo) => {
    setTodos([todo, ...todos]);
  }

  const editState = (id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const changeCompleted = (e) => {
    setCompleted(completed?false:true);
  }

  return (
    <div className="App" style={{
      backgroundImage: `url(${background})`,
      }}>
      <header className="App-header">
        <span><p>Todo List</p></span>
        <TodoInput className="Input" 
        addTodo={addTodo} />
        <TodoList 
        todos={todos} 
        completed={completed}
        removeTodo={removeTodo}
        editState={editState}/>
        <h5>Hide completed</h5><input onClick={changeCompleted} type="checkbox" />
      </header>
    </div>
  );
}

export default App;
