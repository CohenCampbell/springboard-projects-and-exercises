import React, {useState} from "react";


function MadlibsForm({formData, setFormData, onFormSubmit}){

function handleChange(e){
const {name, value} = e.target;
setFormData(data => ({
    ...data,
    [name]: value
}))
}

return(
    <div style={{display:"flex", justifyContent:"center"}}>
       <form onSubmit={onFormSubmit} style={{display:"flex", flexFlow:"column wrap", justifyContent:"center"}}>
       <h1>Madlibs</h1>
        <input 
        required
        placeholder="noun 1" 
        name="noun1" 
        value={formData.noun1}
        onChange={handleChange}>
        </input>

        <input 
        required
        placeholder="noun 2" 
        name="noun2" 
        value={formData.noun2}
        onChange={handleChange}>
        </input>

        <input 
        required
        placeholder="adjective" 
        name="adjective" 
        value={formData.adjective}
        onChange={handleChange}>
        </input>

        <input 
        required
        placeholder="color" 
        name="color" 
        value={formData.color}
        onChange={handleChange}>
        </input>

        <button type="submit">Get Story</button>

       </form> 
    </div>
   
)
}

export default MadlibsForm;