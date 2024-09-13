import Pokecard from "./Pokecard";
import React from 'react';

function Pokedex(pokeArr){
return(
    
    pokeArr.map(pokemon => (<Pokecard 
        name={pokemon.name}
        id={pokemon.id} 
        type={pokemon.type} 
        base_experience={pokemon.base_experience}/>))
)
}

export default Pokedex;