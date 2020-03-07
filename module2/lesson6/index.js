const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');

const app = express();

app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded())

app.use((req, res, next) => {
    console.log(`hitting our middleware for: ${req.url}`)
    next()
})

app.get('/', (req, res) => {
    res.send('welcome');
})

app.get('/profile/:profileName/:topic', (req, res) => {

    // let {limit} = req.query
    
    // if(!limit) {
    //     limit = 20;
    // }


    // Profile.findOne({profileName: req.params.profileName}, {}, {limit: limit})
    //     .then(profile => {
    //         res.render('profile', profile)
    //     })

    console.log(req.params);
    const { profileName, topic } = req.params
    res.send(`welcome ${profileName} on our website about ${topic}`);
})

app.get('/search', (req, res, next) => {
    console.log('passing through')
    next()
})

app.get('/search', (req, res, next) => {

    // code 
    console.log('passing through here before sending response')
    next()
},
(req, res) => {
    res.render('form')
})

app.post('/search', (req, res) => {
    console.log(req.body)
    res.send('thanks for submitting')
})




app.listen(3000, () => {
    console.log('application is listening at port 3000')
})