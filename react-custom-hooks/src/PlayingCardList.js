import React, { useState } from "react";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import { useAxios } from "./hooks";
import {v1 as uuid} from "uuid";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  let url = "https://deckofcardsapi.com/";
  const [cards, setCards] = useAxios(url)
  
  async function addCard(){
    setCards("api/deck/new/draw/");
  };

  return (
    <div className="PlayingCardList">
     <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable; 

//<h3>Pick a card, any card!</h3>
//      <div>
//        <button onClick={addCard}>Add a playing card!</button>
//      </div>
//      <div className="PlayingCardList-card-area">
//        {cards.map(cardData => (
//          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
//        ))}
//      </div>
