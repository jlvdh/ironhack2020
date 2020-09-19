const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const message = new Schema({
  title: String,
  body: String
})

const catSchema = new Schema({
    name: String,
    age: Number,
    bio: String,
    image: String,
    food: [{type: Schema.Types.ObjectId, ref: 'Food'}],
    messages: [message]
},{
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }})

const Cat = mongoose.model('cat', catSchema);

module.exports = Cat