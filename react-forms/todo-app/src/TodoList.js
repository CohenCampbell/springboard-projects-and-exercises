import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuid } from 'uuid';


function TodoList(){
let [todoList, setTodoList] = useState([]);

function addTodo(todo){
setTodoList(todoList => [...todoList, todo])
}

const remove = id => {
    return setTodoList(todo => todoList.filter(todo => todo.id !== id));
  };

const todoHtml = 
todoList.map(todo => (<Todo 
    key={todo.id} 
    id={todo.id} 
    todo={todo.todoInputVal}
    remove={remove}>
    
    </Todo>));

return(
<div>
    <NewTodoForm addTodo={addTodo}/>
    {todoHtml}
</div>
)
};

export default TodoList;