const mongoose = require('mongoose')
const Schema = mongoose.Schema

const widgetSchema = new Schema({
  name: String,
  related: {type: Schema.Types.ObjectId, ref: 'Related'}
})

const Widget = mongoose.model('Widget', widgetSchema)

module.exports = Widget