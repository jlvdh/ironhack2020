const express = require('express');
const router  = express.Router();
const ensureLogin = require('connect-ensure-login').ensureLoggedIn
const Pizza = require('../models/pizza')

router.get('/add', ensureLogin('/auth/login'), (req, res, next) => {
  res.render('pizza/add')
})

router.post('/add', ensureLogin('/auth/login'), (req, res, next) => {
  Pizza.create({
    pizzaname: req.body.pizzaname,
    review: req.body.review,
    owner: req.user._id
  })
  .then(pizza => {
    res.send(pizza)
  })
})

router.get('/list', ensureLogin('/auth/login'), (req, res, next) => {
  Pizza.find({
    owner: req.user._id
  })
  .then(pizzas => {
    res.send(pizzas)
  })
})

router.post('/edit/:id', ensureLogin('/auth/login'), (req, res, next) => {
  Pizza.update({
    id: req.params.id,
    owner: req.user._id
  },{
    pizzaname: req.body.pizzaname,
    review: req.body.review
  })
  .then(pizzas => {
    res.send(pizzas)
  })
})

const checkRoles = require('../auth/checkRole')

router.get('/adminpage', 
checkRoles('ADMIN'),
(req, res, next) => {
    res.send('welcome to the admin page')
})


router.get('/otherpage',
checkRoles('GUEST'),
(req, res, next) => {
  res.send('WELCOME TO THE GUEST PAGE')
})

module.exports = router;
