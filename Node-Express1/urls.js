const fs = require("fs");
const axios = require("axios");
const { fileURLToPath } = require("url");
const { error } = require("console");

async function fileReader(file){
    let lineArr = [];
    let lineStr = "";
    let nameArr = [];
    let nameStr = "";
    counter1 = 0;
     fs.readFile(file, 'utf8', async (err, data)=>{
        if(err){console.log(err); process.kill(1)}
        for(let letter of data){
            if(letter == "\n"){
                lineArr.push(lineStr); nameArr.push(nameStr); 
                nameStr=""; lineStr = ""; 
                counter1=0; 
                continue};

            if(counter1 >= 7){
                if(letter !== "/"){nameStr += letter;}
            }
            lineStr += letter;
            counter1 ++;
        }
        
        for(let i= 0; i<lineArr.length; i++){
            try{
                let res= await axios.get(lineArr[i]);
                if(!res){
                    throw new Error;
                }
                fs.writeFile(nameArr[i], res.data, (err)=>{
                if(err){console.log(`Could not write to ${nameArr[i]}`)};
                console.log(`Wrote to ${lineArr[i]}`);
            });
            } catch(e){
                console.log(`Cannot download data from ${lineArr[i]}`)
            }
           
            
        }
    });
    
    
}

fileReader(process.argv[2])


