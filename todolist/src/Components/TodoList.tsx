import React, { useState } from "react";
import { toEditorSettings, tokenToString } from "typescript";
import Task from "./Task";

function TodoList({todos,editTask, editState,removeTodo,setOrder,completed,order} :{todos:any,editTask:any, editState:any,removeTodo:any,completed:any,order:any,setOrder:any}) {
  
  const ascendingComparator = ({a, b}:{ a: any, b: any}) => (a.task > b.task) ? 1 : -1;
  const descendingComparator = ({a, b}:{ a: any, b: any}) => (a.task > b.task) ? -1 : 1;

  const handleOrder = (e:any) => {
    if(order==1)
      setOrder(-1);
    else
      setOrder(order++);
    console.log(order);
    console.log(todos.sort(compare.bind(null,order)));
  };

  const compare = ()  => {
    if (order == 1) {
      return todos.sort(ascendingComparator);
    } else if(order == -1){
      return todos.sort(descendingComparator);
    } else{
      return todos
    }

  }

  return (
    <ul style={{
      listStyleType: "none"
    }}>
      <button type="button" onClick={handleOrder}>Tasks</button>
      {!completed ?(
        todos.slice(0).reverse().map((todo: { id: any; }) => (
            <Task
            editState={editState}
            editTask={editTask}
            removeTodo={removeTodo}
            key={todo.id} 
            todo={todo}           
            />
        ))
      ):
      (todos.slice(0).reverse().map((todo: { id: any, completed:any }) => !todo.completed ? 
           <Task 
           key={todo.id} 
           todo={todo} 
           editTask={editTask}
           editState={editState}
           removeTodo={removeTodo}
           />
        : <></>     
        ))  }    
    </ul>
  );
}

export default TodoList;