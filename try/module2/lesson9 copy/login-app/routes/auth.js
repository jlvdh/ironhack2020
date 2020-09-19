'use strict'

const express = require('express');
const router  = express.Router();
const bcrypt  = require('bcrypt')
const User = require('../models/user')
const passport = require('passport')

/* GET home page */
router.get('/signup', (req, res, next) => {
  res.render('auth/signup')
})

router.post('/signup', (req, res, next) => {
  const { username, password } = req.body

  bcrypt.hash(password, 10)
    .then(hash => {
      return User.create({
        username: username,
        password: hash
      })
      .then(user => {
        res.send(user)
      })
    })
})

router.get('/login', (req, res, next) => {
  res.render('auth/login', { message: req.flash('error')})
})

// router.post('/login', (req, res, next) => {
//   const { username, password } = req.body

//   let theUser

//   User.findOne({username: username})
//     .then(user => {

//       theUser = user
//       if (!user) {
//         res.send('username not found')
//         throw('username not found')
//       }
//       return bcrypt.compare(password, user.password)
//     })
//     .then(passwordCorrect => {

//       if(!passwordCorrect) {
//         res.send('password incorrect')
//         return
//       }

//       req.session.user = theUser
//       res.send('password correct')

//     })
//     .catch(e => {
//       next(e)
//     })
// })

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth/login',
  failureFlash: true,
  // passReqToCallback: true
}))

router.get('/logout', (req, res, next) => {
  // req.logout()
  // res.redirect('/')
  req.session.destroy(() =>{
    res.redirect('/auth/login')
  })
})

router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email"
    ]
  })
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/private-page",
    failureRedirect: "/" // here you would redirect to the login page using traditional login approach
  })
);


module.exports = router;
