const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {

  const rand = Math.round(Math.random() * 10)
  req.session.number = rand
  console.log(req.session)
  res.render('index');
});

router.get('/protected', (req, res, next) => {
  if(req.session.user) {
    res.send('welcome to our page')
  } else {
    res.redirect('/auth/login')
  }
})
router.get('/number', (req, res, next) => {
  console.log(req.session.number)

  if(req.session.number) {
    res.send(req.session.number.toString())
  } else {
    res.send('no number present')
  }
})

module.exports = router;
