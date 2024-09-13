/** Command-line tool to generate Markov text. */

const fs = require("fs");
const markov = require("./markov");
const axios = require("axios");
const process = require("process");

function machineText(text){
    let newText = new markov.MarkovMachine(text);
    console.log(newText.words);
}

function fileText(path){

    fs.readFile(path, 'utf8', function(err, data){
        if(err){
            console.log("error:", err);
            process.exit(1);
        }
         machineText(data);
        
    })
}

async function urlText(url){
    try{
        let res = await axios.get(url);
        machineText(res.data);
    } catch(err) {
        console.log("cannot read:", url, "error:", err);
        process.exit(1);
    }
    
}

if(process.argv[2] == "file"){
    fileText(process.argv[3]);  
} else if(process.argv[2] == "url"){
    urlText(process.argv[3]);
} else {
    console.log(`first param must be 'url' or 'file' cannot read ${process.argv[2]}`);
    process.exit(1);
}

