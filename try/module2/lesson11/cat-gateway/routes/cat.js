const express = require('express');
const router = express.Router();
const axios = require('axios')

const catService = axios.create({
    baseURL: 'https://api.thecatapi.com/',
    headers: { 'x-api-key': '32668b48-d514-49f5-9574-c67d4559da09' }
})

router.get('/image', (req, res, next) => {
    catService.get('/v1/images/search')
        .then(result => {
            console.log(result.data)
            res.json({
                image: result.data[0].url,
                image_id: result.data[0].id
            })
        })
        .catch(e => {
            next(e)
        })
});

router.post('/favourite', (req, res, next) => {
    axios.post('https://api.thecatapi.com/v1/favourites', 
        {
            "image_id": req.query.image_id,
            "sub_id": "aaa"
        },{
            headers: {
                'x-api-key': '32668b48-d514-49f5-9574-c67d4559da09'
            }
        })
        .then(result => {
            console.log(result.data)
            res.json(result.data)
        })
        .catch(e => {
            next(e)
        })
});

router.get('/favourite', (req, res) => {
    catService.get('/v1/favourites?sub_id=aaa')
        .then(response => {
            res.json(response.data)
        })

})

module.exports = router;