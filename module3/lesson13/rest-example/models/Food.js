const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema ({
  brand: String,
  calories: Number,
  dutch: Boolean
})

  const Food = mongoose.model('Food', foodSchema)
  module.exports = Food