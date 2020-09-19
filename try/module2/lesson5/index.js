const mongoose = require('mongoose')
const express = require('express')

const Cat = require('./models/Cat')

mongoose.connect('mongodb://localhost/example').then(connection => {
    //console.log('connected to ', connection);
})


const cat = new Cat({ 
    name: 'Gizmo',
    age: 8,
    happy: "yes"
});

// cat.save()
//     .then(cat => {
//         console.log(cat)
//     })
//     .catch(err => {
//         console.log(err)
//     })
// Cat.find({age: {$gte: 7}}, null, {sort: {age: -1}, limit: 2})
//     .then(cats => {
//         console.log(cats)
//     })

Cat.updateOne({age: 12}, {name: 'old cat'})
    .then(cats => {
        console.log(cats)
    })
    .catch(e => console.log(e))


// app.listen(3000)