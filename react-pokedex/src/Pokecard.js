import React from 'react';
import "./Pokecard.css"


function Pokecard(props){
return(
    <div className='Pokecard-wholeCard'>
        <h4>{props.name}</h4>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt=""></img>
        <h5>Type: {props.type}</h5>
        <h5>EXP: {props.base_experience}</h5>
    </div>
)
};

export default Pokecard;