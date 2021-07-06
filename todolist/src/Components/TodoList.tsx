import React, { useState } from "react";
import { toEditorSettings } from "typescript";
import Task from "./Task";

function TodoList({todos,editTask, editState,removeTodo,completed} :{todos:any,editTask:any, editState:any,removeTodo:any,completed:any}) {
 
  if(completed){
    return (
      <ul style={{
        listStyleType: "none"
      }}>
        {todos.slice(0).reverse().map((todo: { id: any, completed:any }) => !todo.completed ? 
           <Task 
           key={todo.id} 
           todo={todo} 
           editTask={editTask}
           editState={editState}
           removeTodo={removeTodo}
           />
        : <></>     
        )}  
      </ul>
    );
    
  }
  
  return (
    <ul style={{
      listStyleType: "none"
    }}>
        {todos.slice(0).reverse().map((todo: { id: any; }) => (
            <Task
            editState={editState}
            editTask={editTask}
            removeTodo={removeTodo}
            key={todo.id} 
            todo={todo}           
            />
        ))}    
    </ul>
  );
}

export default TodoList;