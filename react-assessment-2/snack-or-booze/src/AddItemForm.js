import React, { useState } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import "./AddItemForm.css"

//From that sends data to postItem() and is used to create new food or drinks
function AddItemForm({postItem}){
    const INITIAL_STATE = {type: "snacks",
                            name: "",
                            description: "",
                            recipe: "",
                            serve: ""}
    const [newItemInfo, setNewItemInfo] = useState(INITIAL_STATE)
    //calls postItem and adds item to db
    function handleSubmit(e){
        e.preventDefault();
        postItem(newItemInfo);
        console.log(newItemInfo.type)
    }
    //updates form data obj in state on input change
    function handleChange(e){
        const {name, value} = e.target;
        setNewItemInfo(info => ({
            ...info,
            [name]: value
        }))
    }
    //renders form for new food or drink creation 
    return(
        <Card>
            <CardBody>
            <form onSubmit={handleSubmit}>
            <CardTitle>Is the Item a food or a drink item?</CardTitle>
            <label htmlFor="food">food</label>
            <input 
            defaultChecked
            id="food" 
            name="type" 
            type="radio" 
            value="snacks"
            onChange={handleChange}/>
            <br/>
            <label htmlFor="drink">drink</label>
            <input 
            id="drink" 
            name="type" 
            type="radio" 
            value="drinks"
            onChange={handleChange}/>
            <br/>
            <CardTitle>What is the item called?</CardTitle>
            <input placeholder="Name" type="text" name="name" required onChange={handleChange}></input>
            <CardTitle>Describe the item</CardTitle>
            <input placeholder="Description" type="text" name="description" required onChange={handleChange}></input>
            <CardTitle>What is the recipe?</CardTitle>
            <input  placeholder="Recipe" type="text" name="recipe" required onChange={handleChange}></input>
            <CardTitle>How do you serve the item?</CardTitle>
            <input placeholder="Serve" type="text" name="serve" required onChange={handleChange}></input>
            <button>Add Item</button>
            </form>    
            </CardBody>
        </Card>  
    )
}

export default AddItemForm;