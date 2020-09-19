
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
var GoogleStrategy = require('passport-google-oauth20').Strategy;

const bcrypt = require('bcrypt')

const User = require('../models/user');
passport.serializeUser((user, callback) => {
  callback(null, user._id);
});

passport.deserializeUser((id, callback) => {
  User.findById(id)
    .then(user => {
      callback(null, user);
    })
    .catch(error => {
      callback(error);
    });
});

passport.use(
  new LocalStrategy((username, password, callback) => {
    User.findOne({ username })
      .then(user => {
        if (!user) {
          return callback(null, false, { message: 'Incorrect username' });
        }
        bcrypt.compare(password, user.password, (err, correctPassword) => {
          if(!correctPassword) {
            callback(err, false, { message: 'Incorrect password' });
          } else {
            callback(null, user);
          }
        }) 
      })
      .catch(error => {
        callback(error);
      });
  })
);


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      // to see the structure of the data in received response:
      console.log("Google account details:", profile);

      User.findOne({ googleID: profile.id })
        .then(user => {
          if (user) {
            done(null, user);
            return;
          }

          User.create({ googleID: profile.id })
            .then(newUser => {
              done(null, newUser);
            })
            .catch(err => done(err)); // closes User.create()
        })
        .catch(err => done(err)); // closes User.findOne()

  }
));


module.exports = passport