const mongoose = require('mongoose')
const Schema = mongoose.Schema

const relatedSchema = new Schema({
  name: String,
  age: Number,
  widget: {type: Schema.Types.ObjectId, ref: 'Widget'}
})

const Related = mongoose.model('Related', relatedSchema)

module.exports = Related