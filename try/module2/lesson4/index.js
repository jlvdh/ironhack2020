const express = require('express');

const hbs = require('hbs');

const app = express()

app.set("views", __dirname + '/views')
app.set("view engine", "hbs")

hbs.registerPartials(__dirname + "/views/partials")

const myData = {
    name: 'arie',
    img: 'http://placekitten.com/300/500',
    hobbies: [
        {
            name: 'Canouing',
            location: 'the water'
        },
        {
            name: 'Tennis',
            location: 'the tenniscourt'
        },        {
            name: 'volleyball',
            location: 'volleyball court'
        },
 
    ]
}

app.use((req, res, next) => {
    console.log('middleware')
    next()
})

app.get('/', (req, res, next) => {
    console.log('then this route')
    next()
},(req, res) => {
    console.log(req.query)
    res.render('index', myData)
})

app.get('/*', (req, res, next) => {
    console.log('first hitting this route')
    next()
})

app.get('/apage', (req, res) => {
    console.log('the page')
    res.send('the page')
})

app.post('/form', (req, res) => {
    console.log(req.body)
    res.send('thanks for submitting')
})

app.listen(3000, () => {
    console.log('app listening')
})