const express = require('express');
const router  = express.Router();

const Cat = require('../models/cat')

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

module.exports = router;