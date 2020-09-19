const express = require('express');
const router  = express.Router();

const User = require('../models/user')
const bcrypt = require('bcrypt')

router.get('/login', (req, res, next) => {
  res.render('auth/login')
})

router.post('/login', (req, res, next) => {

  const {username, password } = req.body

  let ourUser
  User.findOne({username: username})
    .then(user => {
      if(!user) {
        res.send('user not found')
        return
      }
      ourUser = user
      return bcrypt.compare(password, user.password)
    })
    .then(loggedin => {
      if(loggedin) {
        req.session.user = ourUser
        res.send('logged in')
      } else {
        res.send('wrong password')
      }
    })
    .catch(e => {
      next(e)
    })
})

router.get('/signup', (req, res, next) => {
  res.render('auth/signup')
})

router.post('/signup', (req, res, next) => {
  const {username, password } = req.body

  bcrypt.hash(password, 10)
    .then(hashedpassword => {
      return User.create({
        username,
        password: hashedpassword
      })
    })
  .then(user => {
    res.send('user created')
  })
  .catch(e => {
    next(e)
  })
})



module.exports = router;
