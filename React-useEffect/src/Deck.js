import axios from "axios";
import React, {useEffect, useState} from "react";


function Deck({setCards}){
const [deck, setDeck] = useState("");
const [shuffleStat, setShuffleStat] = useState(false)

const newDeckUrl = "https://deckofcardsapi.com/api/deck/new/shuffle";

useEffect(() => {async function newDeck(){
    const res = await axios.get(newDeckUrl);
    setDeck(res.data);
}
newDeck();
}, [])

async function draw(){
try{
    const drawRes = await axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/`);

    if (drawRes.data.remaining === 0) throw new Error("Deck empty!");

    const card = drawRes.data.cards[0];

    setCards(cards => [
        ...cards,
        {
          id: card.code,
          name: card.suit + " " + card.value,
          image: card.image,
        },
    ]);
} catch(e) {
    alert(e);
}
}

async function startShuffling() {
    setShuffleStat(true);
    try {
      await axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/shuffle/`);
      setCards([]);
    } catch (err) {
      alert(err);
    } finally {
      setShuffleStat(false);
    }
  }

return(
    <div style={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center"}}>
        <button 
        style={{marginBottom:"5px", marginRight:"5px", width:"100px"}}
        onClick={draw}>Draw a card!</button>
        
       { !shuffleStat ? <button style={{marginBottom:"5px", width:"100px"}}
        onClick={startShuffling}>Shuffle the deck!</button> : ""}
        
    </div>
)
}

export default Deck;