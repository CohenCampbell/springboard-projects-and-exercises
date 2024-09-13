inputs = document.querySelectorAll(".Create-Cupcake-Form-Input");
createButton = document.querySelector("#createCupcakeButton");
cupcakeList = document.querySelector("#cupcakeList");
cupcakeListFlavor = document.querySelector("#flavor-input");
cupcakeListSize = document.querySelector("#size-input");
cupcakeListRating = document.querySelector("#rating-input");
cupcakeListURL = document.querySelector("#image-input");

deleteBtnArr = [];
cupcakeObj = {};

async function passDataToAPI(obj){
        await axios.post("/api/cupcakes", obj);
        
    }

async function deleteData(id){
    await axios.delete(`/api/cupcakes/${id}`);
} 

async function addIdToDelBtn(flavor, btn){
   cupcakeId = await axios.get(`/api/cupcakes/${flavor}`);
   btn.id = cupcakeId.data;
}

function listenForDelete(){
    deleteButtons = document.querySelectorAll(".deleteCupcake");

    for(let btn of deleteButtons){
        btn.addEventListener("click", function(event){
            btn.parentElement.remove()
            deleteData(btn.id)
        })
    }
}

createButton.addEventListener("click", async function(event){
    event.preventDefault()
    for (input of inputs){
        cupcakeObj[input.name] = input.value;
    }
    
    await passDataToAPI(cupcakeObj)

    document.querySelector("#newForm").classList.add("hidden");
    document.querySelector("#cupcakeList").classList.remove("hidden");
    document.querySelector("#showNewForm").classList.remove("hidden");

    newCupcake = document.createElement("li")
    newCupcake.textContent = cupcakeListFlavor.value
    newDelBtn = document.createElement("button")
    newDelBtn.classList.add("deleteCupcake")
    newDelBtn.textContent = "X"

    await addIdToDelBtn(cupcakeListFlavor.value, newDelBtn)

    newCupcake.appendChild(newDelBtn)
    cupcakeList.appendChild(newCupcake)

     listenForDelete()
})
//Tried deleteButtons.click(function(){alert("Clicked!")}, didn't work)
listenForDelete()

document.querySelector("#showNewForm").addEventListener("click", function(){
    document.querySelector("#newForm").classList.remove("hidden");
    document.querySelector("#cupcakeList").classList.add("hidden");
    document.querySelector("#showNewForm").classList.add("hidden");

})

document.querySelector("#createCupcakeBackButton").addEventListener("click", function(){
    document.querySelector("#newForm").classList.add("hidden")
    document.querySelector("#cupcakeList").classList.remove("hidden")
    document.querySelector("#showNewForm").classList.remove("hidden")
})
