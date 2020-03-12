const mongoose = require('mongoose')
const Schema = mongoose.Schema

const foodSchema = new Schema({
    name: String,
    description: String
},{
    timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
}
})

const Food = mongoose.model('Food', foodSchema)

module.exports = Food