const passport     = require('passport')
const LocalStrategy = require('passport-local').Strategy
const GoogleStrategy = require('passport-google-oauth20')

const User = require('../models/user')
const bcrypt = require('bcrypt')

passport.serializeUser((user, callback) => {
  callback(null, user._id)
})

passport.deserializeUser((id, callback) => {
  User.findById(id)
    .then(userObj => {
      callback(null, userObj)
    })
    .catch(e => {
      callback(e)
    })
})

passport.use(
  new LocalStrategy((username, password, callback) => {
    User.findOne({ username })
      .then(user => {
        if(!user) {
          return callback(null, false, { message: 'Incorrect username'})
        }
        bcrypt.compare(password, user.password, (err, same) => {
          if(!same) {
            callback(null, false, { message: 'password incorrect'})
          } else {
            callback(null, user)
          }
        })
      })
  })
)

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
}, function(accessToken, refreshToken, profile, callback) {
  console.log(profile)
  User.findOne({GoogleID: profile.id})
    .then(user => {
      if(user) {
        return callback(null, user)
      }
      User.create( {
        GoogleID: profile.id,
        username: profile.emails[0].value
      })
      .then(newUser => {
        callback(null, newUser)
      })
      .catch(e => callback(e))
    })
    .catch(e => callback(e))
}))


module.exports = passport