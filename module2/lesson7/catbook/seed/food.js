const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost/catbook', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  const Food = require('../models/food');

 
  const foods = [{
    name: 'Wiskas',
},{
    name: 'Tuna',
},{
    name: 'Cheese Sticks',
},{
    name: 'Catnip',
}]

  Food.insertMany(foods)
    .then(food => {
        console.log('created food: ', food)
        mongoose.disconnect()
    })