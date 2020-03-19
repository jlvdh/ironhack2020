const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pizzaSchema = new Schema({
  pizzaname: String,
  review: String,
  owner: Schema.Types.ObjectId
})

const Pizza = mongoose.model('Pizza', pizzaSchema)

module.exports = Pizza