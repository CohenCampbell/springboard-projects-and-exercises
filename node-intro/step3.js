const fs = require('fs')
const process = require('process')
const axios = require('axios')

function cat(path, out){
    fs.readFile(path, 'utf8', (err, data) =>{
        if(err){
            console.log(`error: ${err}`); process.exit(1);
            } else if (out) {
                fs.writeFile(out, data, 'utf8', function(err){
                if (err) {
                    console.error(`Couldn't write ${out}: ${err}`);
                    process.exit(1);
                }
                })
            }
        else{
            console.log(data)
        }
    })
}
    
async function webCat(url, out){
    try {
    let res = await axios.get(url);
    if(out){
        fs.writeFile(out, res.data, 'utf8', function(err){
            if (err) {
                console.error(`Couldn't write ${out}: ${err}`);
                process.exit(1);
            }
            })
    }
    else{
        console.log(res.data)
    }
    
    } catch(err){
        console.log(err);
        process.exit(1);
    }
}

if(process.argv[2] == "--out"){
    let param = process.argv[4];
    let out = process.argv[3];
    
    if(param.includes("http")){
        webCat(param, out);
    } else {
        cat(param, out);
    }
}else{
    let param = process.argv[2];

    if(param.includes("http")){
        webCat(param);
    } else {
        cat(param);
    }
}
