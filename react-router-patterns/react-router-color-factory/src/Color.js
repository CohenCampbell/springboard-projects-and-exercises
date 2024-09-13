import React, {useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";


function Color({colors}){
    let {color} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        let listChecker = colors.find(stateColor => stateColor == color)
        if(!listChecker) navigate("/")
    }, [])

    return(
        <div style={{backgroundColor:`${color}`, height:"100vh"}}>
            <h1>{color}</h1>
        <button onClick={()=>navigate("/")}>Home</button>
        </div>
        
    )
}

export default Color;