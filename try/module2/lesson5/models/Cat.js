const mongoose = require('mongoose')
const Schema = mongoose.Schema

const catSchema = new Schema({
    name: {
        type: String,
        unique: true,
        set: name => `mr. ${name}`
        // enum: ['Gizmo', 'Wiggles']
    },
    age: {
        type: Number,
        min: 5
    },
    happy: {
        type: Boolean,
        required: true
    },
    birthDay: Date,
    avatar: {
        type: String,
        default: 'http://placekitten.com/300/300'
    }
})

const Cat = mongoose.model('Cat', catSchema)

module.exports = Cat
