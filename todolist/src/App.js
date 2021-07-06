import React, { useEffect,useState } from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import background from "./backgroundImage.jpg";
import "./App.css";

const LOCAL_STORAGE_KEY = "ToDoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todosSorted,setSortedTodos] = useState([]);
  const [completed,setCompleted] = useState(false);
  const [order,setOrder] = useState(0);

  const ascendingComparator = (a, b) => (a.task > b.task) ? 1: -1;
  const descendingComparator = (a,b) => (a.task > b.task) ? -1 : 1;

  useEffect(()=>{
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storageTodos){
      setTodos(storageTodos);
      setSortedTodos(storageTodos);
    }
  }, []);


  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos));
  }, [todos,todosSorted]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]); 
    setOrder(0);
  }

  const editTask = (todoEdited,e) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === todoEdited.id) {
          return {
            ...todo,
            task: todoEdited.task
          };
        }
        return todo;
      })
    );
    setOrder(0);
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

  const editSort = (e) => {
    console.log("AAAAAAAAAA");
    if (order == 0) {
        setSortedTodos([...todos].sort(ascendingComparator));   
    } else if(order == 1){
       setSortedTodos([...todos].sort(descendingComparator)); 
    }
  }

  const removeTodo = async (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    setOrder(0);
  }

  const changeCompleted = (e) => {
    setCompleted(completed?false:true);
    setOrder(0);
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
        todosSorted={todosSorted}
        order={order}
        setOrder={setOrder}
        completed={completed}
        editTask={editTask}
        removeTodo={removeTodo}
        editState={editState}
        editSort={editSort}/>
        <h5>Hide completed</h5><input onClick={changeCompleted} type="checkbox" />
      </header>
    </div>
  );
}

export default App;
