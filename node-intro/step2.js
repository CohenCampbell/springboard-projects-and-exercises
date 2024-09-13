const fs = require('fs')
const process = require('process')
const axios = require('axios')

function cat(path){
    fs.readFile(path, 'utf8', (err, data) =>{
        if(err){
        console.log(`error: ${err}`); process.exit(1);
        } else {
           console.log(data); 
        }
        
    })
}

async function webCat(url){
    try {
    let res = await axios.get(url);
    console.log(res.data)
    } catch(err){
        console.log(err);
        process.exit(1);
    }
}

let param = process.argv[2];

if(param.includes("http")){
    webCat(param);
} else {
    cat(param);
}