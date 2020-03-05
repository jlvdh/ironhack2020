const mongoose = require('mongoose');

const Schema = mongoose.Schema

const catSchema = new Schema({
    name: {
        type: String,
        set: name => `Mr. ${name}`
    },
    age: {
        type: Number,
        min: 4
    },

    alive: {
        type: Boolean,
        required: true
    },
    birthDate: {
        type: Date
    }
})

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat


