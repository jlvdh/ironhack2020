const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const catSchema = new Schema ({
  food: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  name: {
    type:String,
    unique:true
    },
  age: Number,
  about: String,
  hungry: Boolean
})

const Cat = mongoose.model('Cat', catSchema)
module.exports = Cat