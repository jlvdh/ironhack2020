const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) { return next(err); }
    if (!user) { return res.status(401).json({error: 'user not authenticatd'}); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.status(200).json(user);
    });
  })(req, res, next)
})

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  console.log(username)
  if (!username || !password ) {
    res.status(401).json({message: "Indicate username and password"})
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.status(409).json({message: "The username already exists"})
      // 
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
      res.status(200).json({user})
      //res.redirect("/");
    })
    .catch(err => {
      res.status(404).json({ message: "Something went wrong" });
      //res.render("auth/signup", { message: "Something went wrong" });
    })
  });
});

// Logout route by Daniel
router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).json({message: "User logged out succesfully"})
});

module.exports = router;
