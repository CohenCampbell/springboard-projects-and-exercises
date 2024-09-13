import React from "react";


function Card({card}){
    return <img
    className="Card"
    alt={card.name}
    src={card.image} 
   />; 
}

export default Card;