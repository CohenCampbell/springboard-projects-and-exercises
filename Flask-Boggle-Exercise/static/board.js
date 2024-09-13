let form = document.querySelector("form");
let score = 0;
let guessed = []
let time = 60;

timer = setInterval(timed, 1000)
document.querySelector("#time").innerText = `You have ${time} seconds left to guess!`

if(localStorage.getItem("highScore") == null){
    localStorage.setItem("highScore", 0)
}

document.querySelector("#highScore-msg").innerText = `The highest score is: ${localStorage.getItem("highScore")}`;

function timed(){
time -=1 
document.querySelector("#time").innerText = `You have ${time} seconds left to guess!`
if(time == 0){
clearInterval(timer);
document.querySelector("form").removeChild(document.querySelector("button"));
document.querySelector("form").removeChild(document.querySelector("input"));
gameEnd();
}
}

form.addEventListener("submit", async function(e){
    e.preventDefault();
    let guess = document.querySelector("input").value;
    let ans = await axios.get( "/receiver", { params: { guess: guess }});

    document.querySelector(".info-msg").innerText = `That word is ${ans.data.result}`;

    if(ans.data.result = "ok"){
       
        if(guessed.indexOf(ans.data.guess) == -1){
            score += ans.data.guess.length;
            document.querySelector(".score-msg").innerText = `Your current score is: ${score}`
            guessed.push(ans.data.guess)

            if(score > localStorage.getItem("highScore")){
                localStorage.setItem("highScore", score)
                document.querySelector("#highScore-msg").innerText = `The highest score is: ${localStorage.getItem("highScore")}`;;
            }
        }
        else{
            document.querySelector(".info-msg").innerText = "you've already guessed that word!"
        }
    }
})

async function gameEnd(){
let games = await axios.get("/game_end");
document.querySelector("#games-played").innerText = `Games played: ${games.data}`
}