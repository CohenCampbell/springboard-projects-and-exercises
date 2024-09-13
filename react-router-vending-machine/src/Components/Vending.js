import React from "react";
import { Link } from "react-router-dom";
import "./Main.css"


function Vending(){
return(
    <div>
       <video autoPlay muted loop>
        <source src="https://www.livewallpaperpc.com/preview/LiveWallpaperPC.com-Vending-Machine.mp4" type="video/mp4"/>
       </video>
       <div className="content">
        What will you buy from the vending machine?
        <div className="buttonDiv">
        <Link to="/Drink"><button>Drink</button></Link>
        <Link to="/hotsoup"><button>Hot Soup</button></Link>
        <Link to="/mackerel"><button>Mackerel</button></Link>   
        </div>
        
       </div>
    </div>
)
}

export default Vending;