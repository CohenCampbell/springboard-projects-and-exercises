const express = require('express');
let axios = require('axios');
const { log } = require('console');
var app = express();

function logger(req, res, next){
  console.log(`Recived a ${req.method} request`)
  return next();
}

app.use(express.json);
app.use(logger())

app.post('/', function(req, res, next) {
  try {
    //gets users and adds them to an array
    let results = req.body.developers.map(async d => {
      return await axios.get(`https://api.github.com/users/${d}`);
    });
    //gets users name and bio and adds them to an array
    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

    return res.json(stringify(out));
  } catch(err) {
    next(err);
  }
});

app.listen(3000);