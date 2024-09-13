let url = "http://numbersapi.com/random?json";
let ul = document.querySelector("#ul-1")
let factBtn = document.querySelector("#fact-btn")



factBtn.addEventListener("click", async function getAndPlaceNums(){
    let promArr = [];

    for (let i = 5; i>0; i--){
        promArr.push(
            axios.get(url)
            );
       } 
        
       for (let i = 0; i<4; i++){
        newLi = document.createElement("li");
        ul.append(newLi);
        let newLiObj = await promArr[i];
        newLi.innerText = newLiObj.data.text;
       }
    })