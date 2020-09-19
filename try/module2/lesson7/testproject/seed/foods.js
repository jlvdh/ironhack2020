const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost/testproject', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  const Food = require('../models/food');

 
  const foods = [{
    name: 'Herring',
    calories: 40,
},{
    name: 'Wiskas',
    calories: 10,
},{
    name: 'catnip',
    calories: 20
}]

  Food.insertMany(foods)
    .then(food => {
        console.log('created food: ', food)
        mongoose.disconnect()
    })