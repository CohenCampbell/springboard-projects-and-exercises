const express = require("express");
const app = express();
const ExpressError = require("./expressError");
const shoppingRoutes = require("./shoppingRoutes");

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/items', shoppingRoutes);

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

module.exports = app;