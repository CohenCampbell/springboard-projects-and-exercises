document.querySelector("form").addEventListener("submit", (a)=>{
    a.preventDefault();

    //create a div for individual memes, adding css class, and appending to larger div
    newD = document.createElement("div");
    newD.setAttribute("Class", "newDClass"); 
    document.querySelector("#memeDiv").appendChild(newD); 

     //create top text paragraph
    newPT = document.createElement("div");
    newPT.innerText = document.querySelector("#topText").value;
    newPT.setAttribute("id","PT")
    newD.appendChild(newPT);

    //create image element
    newI = document.createElement("img");
    newI.setAttribute("src", document.querySelector("#image").value);
    newD.appendChild(newI);
 
    //create bottom text paragraph
    newPB = document.createElement("div");
    newPB.innerText = document.querySelector("#bottomText").value;
    newPB.setAttribute("id","PB");
    newD.appendChild(newPB);

    //When div is clicked on it gets romved
    let divSelect = document.querySelectorAll(".newDClass")
    for (let divre of divSelect){
        divre.addEventListener("click", (a)=>{
            a.target.parentElement.remove();
        })
    }
    //resets the input fields
    document.querySelector("#topText").value = "";
    document.querySelector("#image").value = "";
    document.querySelector("#bottomText").value = "";
});