let categories = [];
let tdClueObj = {};
catData = {};



 function getCategoryIds() {
    let idArray = [];
    for(let i = 6; i>0; i--){
        let randInt = Math.floor(Math.random(100) * 100);
        idArray.push(randInt);
    }
    return idArray;
}



async function getCategory(catIdArr) {

     for(let id of catIdArr){ 
            let getResult1 = await axios.get(`https://jservice.io/api/category?id=${id}`);
            catData[getResult1.data.title] = getResult1.data;
    }

    return catData
}




async function fillTable() {
 await getCategory(getCategoryIds());

    let hCount = -1;
    let titleArray = [];

    for(let title in catData){
        titleArray.push(title);
    }

    let tHead = document.querySelector("thead");
    
        for(let tr of tHead.children){
          for(let th of tr.children){
            hCount++;
            th.innerText = titleArray[hCount];
          }
        }
}
     
async function tdObjCreator(){
    await fillTable();

    let clueCounter = -1;

    let titleArray = [];
    for(let title in catData){
        titleArray.push(title);
    }

    for(let i = 5; i>0; i--){
        clueCounter++;
        tdClueObj[i] = catData[titleArray[0]].clues[clueCounter];
    }
    clueCounter = -1;
    for(let i = 10; i>5; i--){
        clueCounter++;
        tdClueObj[i] = catData[titleArray[1]].clues[clueCounter];
    }
    clueCounter = -1;
    for(let i = 15; i>10; i--){
        clueCounter++;
        tdClueObj[i] = catData[titleArray[2]].clues[clueCounter];
    }
    clueCounter = -1;
    for(let i = 20; i>15; i--){
        clueCounter++;
        tdClueObj[i] = catData[titleArray[3]].clues[clueCounter];
    }
    clueCounter = -1;
    for(let i = 25; i>20; i--){
        clueCounter++;
        tdClueObj[i] = catData[titleArray[4]].clues[clueCounter];
    }
    clueCounter = -1;
    for(let i = 30; i>25; i--){
        clueCounter++;
        tdClueObj[i] = catData[titleArray[5]].clues[clueCounter];
    }
}


document.querySelector("table").addEventListener("click", function(e){
    
    try{
if(e.target.innerText !== "?"){
        e.target.innerText = tdClueObj[e.target.getAttribute("id")].answer;
    }  else if(e.target.innerText === "?"){
       e.target.innerText = tdClueObj[e.target.getAttribute("id")].question; 
    }
    } catch (error){
        if(e.target.getAttribute("class") == "tdElement")
        e.target.innerText = `There are less than 5 questions for this catagory!`
    }
    
})
    
async function hideLoadingView(){
    await tdObjCreator();
    document.querySelector(".start").classList.add("slide");
}

document.querySelector(".startBtn").addEventListener("click", function(){
    hideLoadingView();
    rBtnReload();
})

function rBtnReload(){
    setTimeout(function(){
    let newBtn = document.createElement("button");
    newBtn.classList.add("restartBtn");
    newBtn.innerText = "Restart"
    document.querySelector(".tableDiv").append(newBtn);
    
    document.querySelector(".restartBtn").addEventListener("click", async function(){
        await hideLoadingView();
        document.querySelector(".restartBtn").remove();
        for(let td of document.querySelectorAll("td")){
            td.innerText = "?"
        }
        rBtnReload();
    })
}, 20000)
}
