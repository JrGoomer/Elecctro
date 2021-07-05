import React, { useState } from "react";
import { toEditorSettings } from "typescript";
import Task from "./Task";

function TodoList({todos} :{todos:any}) {
  return (
    <ul style={{
      listStyleType: "none"
    }}>
        {todos.map((todo: { id: React.Key | null | undefined; }) =>(
            <Task key={todo.id} todo={todo}/>
        ))}
    </ul>
  );
}

export default TodoList;