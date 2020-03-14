const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/setnumber', (req, res, next) => {
  const randomNumber = Math.floor(Math.random()*10)

  req.session.number = randomNumber

  res.send(`set random number to ${randomNumber}`)

})

router.get('/getnumber', (req, res, next) => {
  console.log(req.session)
  const number = req.session.number

  res.send(`the number is ${number}`)
})

router.get('/members', (req, res, next) => {
  if(req.session.user) {
    res.send('welcome to the members page')
  } else {
    res.redirect('/auth/login')
  }
})

module.exports = router;
