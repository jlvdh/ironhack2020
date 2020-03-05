const mongoose = require('mongoose');
const Cat = require('./models/Cat');

mongoose.connect('mongodb://localhost/example')
    .then(connection => {
        console.log('connection initialised')
    // console.log(connection)
})
.catch(err => {
    console.log(err)
})

const Medium = mongoose.model('Medium', {name: String})


const newsPaper = new Medium({name: "de Telegraaf"})

// newsPaper.save()
//     .then(medium => {
//         console.log(medium)
//     })

const date = new Date('02-05-1904')

const cat = new Cat({name: "Schreudingers cat", age: 6, alive: true, birthDate: date, food: "wiskas"});

// cat.save()
//     .then(cat => {
//         console.log(cat)
//     })
//     .catch(e => console.log(e))

// app.get('/cat', (req, res) => {
//     Cat.find().then(cats => {
//         res.render('catTemplate', cats)
//     })

// })

Cat.find({ }, {name: 1, alive: 1, age: 1}, {sort: {age: -1}, limit: 3})
    .then(cats => {
        console.log(cats)
    })

Cat.updateMany({name: "Schreudingers cat"}, {alive: false})

Cat.deleteMany({age: {$lte: 4}}).then(cats => console.log(cats))
