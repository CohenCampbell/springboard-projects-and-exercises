import React from 'react';
import { useNavigate } from 'react-router-dom';


function NewColorForm({setColors}){
    const navigate = useNavigate();

    function addNewColor(e){
        e.preventDefault()
        let newColor = e.target.elements.newColor.value;
        setColors(colors => [newColor, ...colors]);
        e.target.elements.newColor.value = "";
        navigate("/")
        }

    return(
        <form onSubmit={addNewColor}>
            <button onClick={() => navigate("/")}>Home</button>
            <h1>Add a new color!</h1>
            <input name='newColor' placeholder='color'/>
            <button type='submit'>Add</button>
        </form>
    )
}

export default NewColorForm;