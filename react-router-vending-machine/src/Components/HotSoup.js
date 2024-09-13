import React from "react";
import "./Main.css"
import { Link } from "react-router-dom";


function HotSoup(){
    return(
        <div>
            <video autoPlay muted loop>
            <source src="https://media.istockphoto.com/id/1172984310/video/korean-kimchi-soup.mp4?s=mp4-640x640-is&k=20&c=nMeqziqGypAWH8Wp5MV1ggZ6BA1FPduvhDPAFolowAY=" type="video/mp4"/>
           </video>
           <div className="content">
            Somehow you got hot soup out of a vending machine, it's delicious! 
            <div>
              <Link to="/"><button>Back</button></Link>  
            </div>
           </div>
        </div>
    )
}

export default HotSoup;