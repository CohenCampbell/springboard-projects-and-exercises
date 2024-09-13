import React from "react";
import { useNavigate, Link } from "react-router-dom";


function Home({colors}){
    const navigate = useNavigate()

    function renderColorsHtml(){
        return(
            colors.map(color => {return(
            <Link to={`/colors/${color}`}>
                <li style={{listStyleType:"none"}}>{color}</li>
            </Link>)})
        )
    }

    return(
        <div>
            <h1>Please Pick a color</h1>
            <ul>
                {renderColorsHtml()}
            </ul>
            <button onClick={() => navigate("/form")}>Add new color!</button>
        </div>
    )
}

export default Home;