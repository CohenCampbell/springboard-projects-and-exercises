const url = "https://deckofcardsapi.com/api/deck/new/draw";
const cardBtn = document.querySelector("#card-btn");
const cardDiv = document.querySelector("#card-div");

//1
axios.get(url).then((res) =>{
    console.log(res.data.cards[0].value, res.data.cards[0].suit)
})

//2
axios.get(url).then((res) => {
    console.log("card 1: ", res.data.cards[0].value, res.data.cards[0].suit)
}).then(axios.get(url).then((res) => {
    console.log("card 2: ", res.data.cards[0].value, res.data.cards[0].suit)
}))

//3
cardBtn.addEventListener("click", function(){
    axios.get(url).then(res => {
        newImg = document.createElement("img");
        newImg.classList.add("card");
        newImg.src=`${res.data.cards[0].image}`;
        if(document.querySelector("img") !== null){
            cardDiv.removeChild(document.querySelector("img"));
        }  
        cardDiv.appendChild(newImg);
    });
});