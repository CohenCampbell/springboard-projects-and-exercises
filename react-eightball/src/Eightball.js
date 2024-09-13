import React, { useState } from 'react';


function Eightball(answers){
    console.log(answers.length)
function randAns(){return answers[Math.floor(Math.random() * answers.length)]};
const [ans, setAns] = useState(randAns());

return(
    <div style={{backgroundColor: ans.color, 
        borderRadius: '50%',
        display:'inline-block',
        width:'150px',
        height:'150px',
        textAlign:'center',
        color:'white',}} onClick={()=>setAns(randAns)}>

        <span style={{display:'inherit', marginTop:'41%'}}>{ans.msg}</span>
        
    </div>
)
}

export default Eightball;