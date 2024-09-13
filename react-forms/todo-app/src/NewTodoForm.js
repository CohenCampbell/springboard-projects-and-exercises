import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function NewTodoForm({addTodo}){

    let [todoInputVal, setTodoInputVal] = useState("")

    function handleChange(e){setTodoInputVal(e.target.value)}

    function handleSubmit(e){
        e.preventDefault();
        addTodo({todoInputVal, id: uuid()});
        setTodoInputVal("");
    }

    return(<form onSubmit={handleSubmit}>
        <label htmlFor="todoInput">Todo: </label>
        <input value={todoInputVal} onChange={handleChange} id="todoInput" type="text"/>
        <button type="submit">Add!</button>
    </form>)
}

export default NewTodoForm;