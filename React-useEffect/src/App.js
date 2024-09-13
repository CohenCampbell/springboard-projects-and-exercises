import React, {useState} from "react";
import Deck from "./Deck";
import Card from "./Card"


function App() {
  const [cards, setCards] = useState([]);
  const cardHtml = cards.map(card => <Card card={card}/>)
  
  return (
    <div className="App">
      <Deck setCards={setCards}/>
      {cardHtml}
    </div>
  );
}

export default App;
