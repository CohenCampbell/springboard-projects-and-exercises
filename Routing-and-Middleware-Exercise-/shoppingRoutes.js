const express = require("express");
const router = new express.Router();
const shoppingList = require("./fakeDb.js");
const ExpressError = require("./expressError.js");


router.get("/",(req, res, next) =>{
    try{
        res.json(shoppingList);
    } catch(e){
        return next(e);
    }
})

router.post("/", (req, res, next) => {
    try {
        newItem = req.body;
        shoppingList.push(newItem);
    res.json({added:{newItem}});
    } catch(e){
        next(e);
    }
})

router.get("/:name", (req, res, next) => {
    try{
        let getItem;
        let itemName = req.params.name;
        for(let item of shoppingList){
            if(item.name == itemName){
                getItem = item;
                return res.json(getItem);
            }
        }
        throw new ExpressError(`${itemName} could not be found!`, 404)
    } catch(e){
        next(e);
    }
})

router.patch("/:name", (req, res, next) => {
    try{
        let getItem;
        let itemName = req.params.name;
        for(let item of shoppingList){
            if(item.name == itemName){
                getItem = item;
            }
        } if(!getItem){
            throw new ExpressError(`${itemName} could not be found!`, 404);
        }
        getItem.name = req.body.name || getItem.name;
        getItem.price = req.body.price || getItem.price;
        res.json({"updated": getItem});
    } catch {
        next(e);
    }
})

router.delete("/:name", (req, res, next) => {
    try{
        let itemName = req.params.name;
        for(let i = 0; i<=Object.keys(shoppingList).length; i++){
            if(shoppingList[i].name == itemName){
                delete shoppingList[i];
                res.json({message:"Deleted"})
            }
        }
        throw new ExpressError(`${itemName} could not be found!`, 404)
    } catch(e){
        next(e);
    }
})
module.exports = router;