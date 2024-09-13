const gameContainer = document.getElementById("game");
let clickCount = 0;
let cardIdCount = 0;
const cardIdArray = [];
let cardOne= "";
let cardTwo= "";
let timerDone = 1;
let score = 0;


let bestScore = document.querySelector("#score");
bestScore.innerText = localStorage.getItem("Score");
//add as many colors as needed
const COLORS = [
  "red",
  "blue",
  "Yellow",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "Yellow",
];

let cardAmount = COLORS.length/2;

for(let i = 0; i<=COLORS.length; i++){
cardIdArray.push(i);
}

function shuffle(array) {
  let counter = array.length;


 
  while (counter > 0) {
    
    let index = Math.floor(Math.random() * counter);



    counter--;


   
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }


  return array;
}


let shuffledColors = shuffle(COLORS);



function createDivsForColors(colorArray) {
  for (let color of colorArray) {
   
    const newDiv = document.createElement("div");


    newDiv.classList.add(color);
    cardIdCount++;
    newDiv.setAttribute("id", cardIdArray[cardIdCount]);
   
    newDiv.addEventListener("click", handleCardClick);
    newDiv.style.borderRadius = "5%";
  
    gameContainer.append(newDiv);
   
  }
}







function handleCardClick(event) {
  
  score++;
  scoreBox.innerText = " " + score;
  clickCount++;

  if(timerDone == 0){
    clickCount--;
  }
 
  if(clickCount == 1){
   
    cardOne = event.target;
    cardOne.style.backgroundColor = cardOne.classList[0];
   
  } else if(clickCount == 2){
    
    if(cardOne.getAttribute("id") !== event.target.getAttribute("id")){
    timerDone--;
    cardTwo = event.target;
    cardTwo.style.backgroundColor = cardTwo.classList[0];
   
   
    if (cardOne.classList[0] !== cardTwo.classList[0]){
      
          timer1 = setTimeout(function(C1, C2){
          C1.style.backgroundColor = "teal";
          C2.style.backgroundColor = "teal";
          }, 1000, cardOne, cardTwo);
          cardAmount++;
          
     }
     setTimeout(function(){
      timerDone++;
    }, 1000);
    cardAmount--
    cardOne = "";
    cardTwo = "";
    clickCount = 0;
    console.log("you just clicked", event.target);
    console.log(clickCount);
     
  }
  else{
      clickCount--;
     }

     if(cardAmount == 0){
      restart.style.display = "inline";
     }
    

    
}}

document.querySelector("#startBtn").addEventListener("click", function(clicked){
  document.querySelector("#start").classList.add("offScreen");
})
  
let scoreBox = document.querySelector("#gameScoreBox");

let restart = document.querySelector("#restart")

restart.addEventListener("click", ()=>{
  if(localStorage.getItem("Score") == undefined){
    localStorage.setItem("Score", JSON.stringify(score));
    }
   else{
    if(score < localStorage.getItem("Score")){
    localStorage.setItem("Score", JSON.stringify(score))
    }
   }

  location.reload();
})



createDivsForColors(shuffledColors);
