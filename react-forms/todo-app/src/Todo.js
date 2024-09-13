import React from "react";

function Todo({todo, key, id, remove}){

    const handleDelete = (e) => remove(id)

    return(<span 
        id={id}
        key={key} 
        style={{margin:"10px"}}>
            {todo}
            <button onClick={handleDelete}>X</button>
            </span>)
}

export default Todo;