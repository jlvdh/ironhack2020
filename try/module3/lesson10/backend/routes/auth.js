const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
var multer  = require('multer')
var upload = multer({ dest: 'public/uploads/' })


// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


// router.get("/login", (req, res, next) => {
//   res.render("auth/login", { "message": req.flash("error") });
// });

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.status(401).json({error: 'user not authenticatd'}); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.status(200).json(user);
    });
  })(req, res, next);
});

// router.post("/login", passport.authenticate("local", {
//   successRedirect: "/",
//   failureRedirect: "/auth/login",
//   failureFlash: true,
//   passReqToCallback: true
// }));

// router.get("/signup", (req, res, next) => {
//   res.render("auth/signup");
// });

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  console.log(req.body)
  if (username === "" || password === "") {
    res.status(200).json({error: 'username or password not present'})
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.json({ message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass
    });

    newUser.save()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.render("auth/signup", { message: "Something went wrong" });
    })
  });
});

router.post("/editprofile", upload.single('profileimage'), (req, res) => {
  if(!req.user) {
    res.status(400).json({message: 'authentication required'})
  }
  User.updateOne({_id: req.user.id}, 
    {
      job: req.body.job,
      image: req.file.filename
    })
  .then(user => {
    res.status(200).json(user)
  })
  .catch(e => next(e))  
})

router.get("/loggedIn", (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
}
res.status(403).json({ message: 'Unauthorized' });
})

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.post("/profileimage", upload.single('profileimage'), (req, res, next) => {
  if(!req.user) {
    res.status(400).json({message: 'authentication required'})
  }
  console.log(req.file)
  User.updateOne({_id: req.user.id}, {image: req.file.filename})
  .then(user => {
    res.status(200).json(user)
  })

// router.get("/profile", (req, res, next) => {
//   if(!req.user) {
//     res.status(400).json({message: 'authentication required'})
//   }
//   User.findById(req.user.id)
//     .then()
// })
})

module.exports = router;
