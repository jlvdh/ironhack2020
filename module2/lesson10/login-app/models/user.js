const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: String,
  password: String,
  GoogleID: String,
  role: {
    type: String,
    enum: ['GUEST', 'ADMIN', 'PIZZAGURU'],
    default: 'GUEST'
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User