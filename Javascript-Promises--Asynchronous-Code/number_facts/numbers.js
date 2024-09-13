let url = "http://numbersapi.com/random";
const request = new XMLHttpRequest();
let ul = document.querySelector("#ul-1")
let factBtn = document.querySelector("#fact-btn")
let promArr = [];

factBtn.addEventListener("click", function(){
    for (let i = 5; i>0; i--){
    promArr.push(
        axios.get(url)
     );
    }
    Promise.all(promArr).then(
        numArr => (numArr.forEach((p)=> {
            newLi = document.createElement("li")
            ul.append(newLi)
            newLi.innerText = p.data
        }))
    ).catch(err => console.log(err))
})

