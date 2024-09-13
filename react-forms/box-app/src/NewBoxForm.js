import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';

function NewBoxForm({addBox}){
    const initialState = {
        width: "",
        height: "",
        backgroundColor: ""
    }

    const [formData, setFormData] = useState(initialState);
    
    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({...formData, id: uuid()});
        setFormData(initialState);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Width</label>
            <input 
            type="text"
            name="width"
            id="width"
            placeholder="width"
            value={formData.width}
            onChange={handleChange}>
            </input>
            <label htmlFor="height">Height</label>
            <input 
            type="text"
            name="height"
            id="height"
            placeholder="height"
            value={formData.height}
            onChange={handleChange}>
            </input>
            <label htmlFor="backgroundColor">Background Color</label>
            <input 
            type="text"
            name="backgroundColor"
            id="backgroundColor"
            placeholder="backgroundColor"
            value={formData.backgroundColor}
            onChange={handleChange}>
            </input>
            <button type="submit">Create Box!</button>
        </form>
    )
}

export default NewBoxForm;