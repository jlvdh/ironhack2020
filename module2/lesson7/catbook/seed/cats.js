const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost/catbook', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  const Cat = require('../models/cat');

 
  const cats = [{
    name: 'Admin',
    age: 100,
    bio: 'Most important cat of cats'
},{
    name: 'Wiggles',
    age: 7,
    bio: 'Jorgs imaginary cat'
}]

  Cat.insertMany(cats)
    .then(cats => {
        console.log('created cats: ', cats)
        mongoose.disconnect()
    })