const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=2";
const cardBtn = document.querySelector("#card-btn");
const cardDiv = document.querySelector("#card-div");

//1
async function partOne(){
    let card = await axios.get(url);
    let cardVal = card.data.cards[0].value;
    let cardSuit = card.data.cards[0].suit;
    console.log(cardVal, cardSuit);
}


//2
async function partTwo(){
    let card = await axios.get(url);
    let cardVal1 = card.data.cards[0].value;
    let cardSuit1 = card.data.cards[0].suit;
    
    let cardVal2 = card.data.cards[1].value;
    let cardSuit2 = card.data.cards[1].value;
    console.log(`Card 1: ${cardVal1}${cardSuit1}, Card 2: ${cardVal2}${cardSuit2}`)
}

//3
cardBtn.addEventListener("click", async function(){
    let card = await axios.get(url);
    newImg = document.createElement("img");
    newImg.classList.add("card");
    newImg.src=`${card.data.cards[0].image}`;
    if(document.querySelector("img") !== null){
    cardDiv.removeChild(document.querySelector("img"));
    }  
    cardDiv.appendChild(newImg);
})

