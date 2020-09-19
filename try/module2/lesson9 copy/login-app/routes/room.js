const express = require('express');
const router  = express.Router();
const ensureLogin = require('connect-ensure-login').ensureLoggedIn
const Room = require('../models/Room')

router.get('/list', ensureLogin('/list'), (req, res, next) => {
    Room.find({
        owner: req.user._id
    })
    .then(rooms =>{
        res.send(rooms)
    })
})


router.get('/add', ensureLogin('/auth/login'), (req, res, next) => {
    console.log(req.user)
    res.render('room/add')
})

router.post('/add', ensureLogin('/auth/login'), (req, res, next) => {
    
    Room.create({
        name: req.body.name,
        owner: req.user._id 
    })
    .then(room => {
        res.send(room)
    })
})


router.post('/edit', ensureLogin('/auth/login'), (req, res, next) => {
    
    Room.update({
        id: req.body.id,
        owner: req.user._id
    })
    .then(room => {
        res.send(room)
    })
})


module.exports = router;