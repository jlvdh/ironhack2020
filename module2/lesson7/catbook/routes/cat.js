const express = require('express');
const router  = express.Router();

const Cat = require('../models/cat')
const Food = require('../models/food')

/* GET home page */
router.get('/', (req, res, next) => {
    console.log('cat homepage reached')
    next()
}, (req, res, next) => {
    Cat.find()
        .then(cats => {
            res.render('cats/list', { cats, othervalue: 'this are all the cats' })
        })
        .catch(e => {
            next(e)
        })
});

router.get('/add', (req, res, next) => {
    res.render('cats/add')
})

router.post('/add', (req, res, next) => {
    console.log(req.body)
    const {name, age, bio, dateOfBirth} = req.body
    Cat.create({
        name,
        age,
        bio,
        dateOfBirth
    })
    .then(cat => {
        // res.send('thanks for creating the cat')
        res.redirect('/cat')
    })
    .catch(e => {
        next(e)
    })
})

router.get('/edit/:id', (req, res, next) => {
    console.log(req.params.id)
    Cat.findById(req.params.id)
        .then(cat => {
            console.log(cat)
            res.render('cats/edit', cat)
        })
})

router.post('/edit/:id', (req, res, next) => {
    const {name, age, bio, dateOfBirth} = req.body;

    Cat.updateOne({_id: req.params.id}, {$set: {name, age, bio, dateOfBirth}})
        .then(() => {
            res.redirect('/cat')
        })
        .catch(e => {
            next(e)
        })
})

router.get('/delete/:id', (req, res, next) => {
    Cat.deleteOne({_id: req.params.id})
        .then(() => {
            res.redirect('/cat')
        })
})

router.get('/diet/:id', (req, res, next) => {

    const foods = Food.find()
    const cat = Cat.findById(req.params.id).populate('foods')

    Promise.all([cat, foods])
        .then(result => {
            res.render('cats/diet', {cat: result[0], foods: result[1]})
        })
        .catch(e => {
            next(e)
        })
})

router.post('/diet/:id', (req, res, next) => {
    Cat.updateOne({_id: req.params.id}, {$push: {foods: req.body.foodId}})
        .then( () => {
            res.redirect(`/cat/diet/${req.params.id}`)
        })
        .catch(e => {
            next(e)
        })
})

router.post('/message/:id', (req, res, next) => {
    Cat.findById(req.params.id)
        .then(cat => {
            cat.messages.push({
                body: req.body.body
            })
            return cat.save()
        })
        .then( () => {
            res.redirect(`/cat/diet/${req.params.id}`)
        })
        .catch(e => {
            next(e)
        })
})

module.exports = router;