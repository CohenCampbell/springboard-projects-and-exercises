import React, {useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";


function Dog({dogs}){
    let dogParam = useParams();
    const navigate = useNavigate();
    let dog;
    
    function getDog(){
     for(let dogObj of dogs){
        if(dogObj.src == dogParam.dog || dogObj.name == dogParam.dog){
            dog = dogObj;
        }
        }   
    }
    getDog()
    
    useEffect(() =>{
        if(dog === undefined){
            navigate("/")
        }
    }, [dog])

    if(dog === undefined){
    return(<div>Loading...</div>) 
    } 

    function factHtmlRender(){
        return dog.facts.map(fact => {return(
            <li style={{listStyleType:"none"}}>
                {fact}
            </li>
        )})
    }

    return(
        <div>
            <h1>{dog.name}</h1>
            <p>{dog.name} is {dog.age} years old. 
            Here are some interesting facts about {dog.name}.</p>
            <ul>
               {factHtmlRender()}
            </ul>
        </div>
    )
}

export default Dog;