import React from "react";
import "./Main.css"
import { Link } from "react-router-dom";


function Drink(){
    return(
        <div>
            <video autoPlay muted loop>
            <source src="https://player.vimeo.com/external/474365893.sd.mp4?s=086331833a69792f9f380912aefe638943a3007e&profile_id=164&oauth2_token_id=57447761" type="video/mp4"/>
           </video>
           <div className="content">
            You couldn't decide what drink to buy.
            <div>
              <Link to="/"><button>Back</button></Link>  
            </div>
           </div>
        </div>
    )
}

export default Drink;