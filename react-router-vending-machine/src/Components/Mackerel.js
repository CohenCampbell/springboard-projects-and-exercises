import React from "react";
import "./Main.css"
import { Link } from "react-router-dom";


function Mackerel(){
return(
    <div>
        <video autoPlay muted loop>
        <source src="https://i.gifer.com/BxEL.mp4" type="video/mp4"/>
       </video>
       <div className="content">
        Don't order Mackerels from vending machines, it's consumption is outlawed!
        <div>
          <Link to="/"><button>Back</button></Link>  
        </div>
       </div>
    </div>
)
}

export default Mackerel;