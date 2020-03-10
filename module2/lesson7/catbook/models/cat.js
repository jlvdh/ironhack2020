const mongoose = require('mongoose')
const Schema = mongoose.Schema

const catSchema = new Schema({
    name: 'string',
    age: 'number',
    bio: 'string',
    dateOfBirth: 'date',
})

const Cat = mongoose.model('Cat', catSchema)

module.exports = Cat