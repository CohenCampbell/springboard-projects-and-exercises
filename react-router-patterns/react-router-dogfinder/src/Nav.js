import React from "react";
import { Link } from "react-router-dom";


function Nav({dogs}){
    
    function renderDogsHtml(){
         return dogs.map(dog =>{
            return(
                <div>
                <Link to={`/dogs/${dog.name}`}>
               {dog.name}
               </Link>    
                </div>
               
            )
         })
    }

    return(
        <nav>
            {renderDogsHtml()}
        </nav>
    )
}

export default Nav; 