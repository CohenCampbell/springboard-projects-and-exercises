const express = require("express");
const app = express();
const ExpressError = require("./expressError");
const e = require("express");

app.use(express.json());
app.use(express.urlencoded({extended:true}));


function mean(arr){
    let count = 0;
    let sum = 0;

    for(let num of arr){
        if(num == ","){
            continue;
        } else if(global.isNaN(Number(num))){
            throw new ExpressError(`${num} not a number!`, 400)
        }
        sum += Number(num);
        count++;
    }
    let mean = sum/count;
    return mean;
}

function median(arr){
    let sortNums = [];
    for(let num of arr){
        if(num == ","){
            continue;
        } else if(global.isNaN(Number(num))){
            throw new ExpressError(`${num} not a number!`, 400)
        }
        sortNums.push(Number(num));
    }
    sortNums.sort();
    return sortNums[Math.floor(sortNums.length/2)];
}

function mode(arr){
    let sortNums = [];
    for(let num of arr){
        if(num == ","){
            continue;
        } else if(global.isNaN(Number(num))){
            throw new ExpressError(`${num} not a number!`, 400)
        }
        sortNums.push(Number(num));
    }
    sortNums.sort();

    let bestStreak = 1;
    let bestInt = sortNums[0];
    let currStreak = 1;
    let currInt = sortNums[0];
    
    for(let i = 1; i < sortNums.length; i++){
        if(sortNums[i -1] !== sortNums[i]) {
            if(currStreak > bestStreak){
                bestStreak = currStreak;
                bestInt = currInt;
            }
            currStreak = 0;
            currInt = sortNums[i];
        }
        currStreak++;
    }
    return currStreak > bestStreak ? currInt : bestInt;
}

app.get("/mean", (req, res, next) => {
    if(!req.query.nums){
        throw new ExpressError("nums query is required!", 400)
    }
   
    try{
    const response =  {operation: "mean", value: mean(req.query.nums)}
    res.json(response)
    } catch(e) {
        next(e);
    }
})

app.get("/median", (req, res, next) => {
    
    if(!req.query.nums){
        throw new ExpressError("nums query is required!", 400)
    }

    try{    
        const response = {operation: "median", value: median(req.query.nums)}
        res.json(response);
    } catch(e) {
        next(e);
    }
})

app.get("/mode", (req, res, next) => {
    
    if(!req.query.nums){
        throw new ExpressError("nums query is required!", 400)
    }

    try{    
        response = {operation: "mode", value: mode(req.query.nums)};
        res.json(response);
    } catch(e){
        next(e);
    }
})

app.use(function(req, res, next){
    const e = new ExpressError("Page not found", 404);
    next(e);
})

app.use(function(err, req, res, next){
    let status = err.status || 500;
    let message = err.message;

    return res.status(status).json({
        error: {message, status}
    });
})

app.listen(8000);

module.exports = {mean, median, mode};