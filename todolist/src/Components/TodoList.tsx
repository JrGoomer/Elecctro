import React, { useState } from "react";
import { toEditorSettings, tokenToString } from "typescript";
import Task from "./Task";

function TodoList({todos,editTask, editState,removeTodo,setOrder,todosSorted,editSort,completed,order} :{todos:any,editTask:any, editState:any,removeTodo:any,completed:any,order:any,setOrder:any, editSort:any,todosSorted:any}) {
  
  const ascendingComparator = (a: any, b: any) => (a.task > b.task) ? console.log(a.task): -1;
  const descendingComparator = (a: any, b: any) => (a.task > b.task) ? -1 : 1;



  const handleOrder = (e:any) => {
    if(order==1){
      setOrder(-1);
    }
    else if(order==-1){
      setOrder(0);
    }
    else if(order==0){
      setOrder(1);
    }
    editSort();
  };


  return (
    <ul style={{
      listStyleType: "none"
    }}>
      <button className="tasks-button" type="button" onClick={handleOrder}>Tasks</button>
      {order!=0 ?(
        todosSorted.map((todo: { id: any; }) => (
            <Task
            editState={editState}
            editTask={editTask}
            removeTodo={removeTodo}
            key={todo.id} 
            todo={todo}           
            />          
        )
        )   
      ):
      (todos.slice(0).reverse().map((todo: { id: any, completed:any }) => !completed || !todo.completed ? 
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