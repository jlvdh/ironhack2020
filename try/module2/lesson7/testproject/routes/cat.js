const express = require('express');
const router  = express.Router();

const Cat = require('../models/cat')
const Food = require('../models/food')


/* GET home page */
router.get('/add', (req, res, next) => {
  res.render('cat/add');
});

router.post('/add', (req, res, next) => {
    const {name, age, bio, image } = req.body;

    Cat.create({ name, age, bio, image })
        .then(cat => {
            res.send(cat)
        })
        .catch(e => {
            next(e)
        })
})

router.get('/list', (req, res, next) => {
    Cat.find()
        .then(cats => {
            res.render('cat/list', {cats})
        })
        .catch(e => next(e))
})

router.get('/edit/:id', (req, res, next) => {
    Cat.findById(req.params.id)
        .then(cat => {
            res.render('cat/edit', cat)
        })
        .catch(e => {
            next(e)
        })
})

router.get('/error', (req, res, next) => {
    next('an error occurred')
});

router.post('/edit/:id', (req, res, next) => {
    Cat.updateOne({_id: req.params.id}, {$set: req.body})
        .then(cat=> {
            res.redirect(`/cat/list`)
        })
        .catch(e => next(e))
});


router.get('/diet/:id', (req, res, next) => {

    const cat = Cat.findById(req.params.id).populate('food')
    const foods = Food.find()

    Promise.all([cat, foods])
        .then(response => {
            console.log(response)
            res.render('cat/diet', {cat: response[0], foods: response[1]})
        })
        .catch(e => {
            next(e)
        })
})

router.post('/diet/:id', (req, res, next) => {
    console.log('route')
    Cat.updateOne({_id: req.params.id}, {$push: { food: req.body.foodId }})
        .then( () => {
            res.redirect(`/cat/diet/${req.params.id}`)
        })
        .catch(e => {
            next(e)
        })
})

router.post('/message/:id', (req, res, next) => {
    console.log('posting to route')
    Cat.findById(req.params.id)
        .then(cat => {
            cat.messages.push({body: req.body.message})
            return cat.save()
        })
        .then(cat => {
            res.redirect(`/cat/diet/${req.params.id}`)
        })
        .catch(e => {
            next(e)
        })
})

router.get('/deletemessage/:id/:msgId', (req, res, next) =>{
    Cat.findById(req.params.id)
    .then(cat => {
        cat.messages.id(req.params.msgId).remove()
        return cat.save()
    })
    .then(cat => {
        res.redirect(`/cat/diet/${req.params.id}`)
    })
    .catch(e => {
        next(e)
    })

})

router.get('/catlanguage/:id/:msgId', (req, res, next) =>{
    Cat.findById(req.params.id)
    .then(cat => {
        cat.messages.id(req.params.msgId).body = "miaOW"
        return cat.save()
    })
    .then(cat => {
        res.redirect(`/cat/diet/${req.params.id}`)
    })
    .catch(e => {
        next(e)
    })

})
module.exports = router;
