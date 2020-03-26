const express    = require("express");
const catsRouter = express.Router();
const axios      = require("axios");

//// Routes

catsRouter.get("/", (req, res, next) => {
    res.send("MIAUW wauw!")
})

catsRouter.get('/image', (req, res, next) => {
    axios({
        method: "GET",
        url: "https://api.thecatapi.com/v1/images/search",
        headers: {'x-api-key': '32668b48-d514-49f5-9574-c67d4559da09'}
      })
        .then(response => {
            const result = response.data;
            res.json({id: result[0].id, url: result[0].url})
        })
        .catch(err => {
          next(err)
        });
})

catsRouter.get('/random-image', (req, res, next) => {
    res.render('image')
})

module.exports = catsRouter

catsRouter.get('/random-image', (req, res, next) => {
    res.render('image')
})

module.exports = catsRouter