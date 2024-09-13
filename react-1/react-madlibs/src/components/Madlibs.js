import React from "react";


function Madlibs({formData, setFormData, initailState}){

    function resetClick(e){
        setFormData(initailState);
        console.log(formData)
        }

    return(
<div style={{display:"flex", justifyContent:"center", flexFlow:"column wrap"}}>
    <h2 style={{display:"flex", justifyContent:"center"}}>
    {`There was a ${formData.color} 
    ${formData.noun1} who loved a 
    ${formData.adjective} ${formData.noun2}`}
    </h2>
    <div style={{alignSelf:"center"}}>
    <button onClick={resetClick}>Reset</button>
    </div>
   
</div>

)
}

export default Madlibs;