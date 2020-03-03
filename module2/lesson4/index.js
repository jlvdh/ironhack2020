const express = require('express');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static('public'))

app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')

const cat = {
    name: "Spooky",
    // title: "Spooky's page",
    hobby: "sleeping",
    food: "a lot!",
    img: "http://placekitten.com/600/200",
    someHtml: "<h1>MIAUW MEOW MIAU</h1>",
    hungry: false,
    favoriteToys: [
        {
            name: 'ball',
            color: 'blue'
        },        {
            name: 'mouse',
            color: 'grey'
        },{
            name: 'fishes',
            color: 'blue'
        }
    ]
}

app.get('/', (req, res) => {
    res.render('index', cat)
})

app.get('/api', (req, res) => {
    res.json(cat)
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.listen(3000, () => {
    console.log('our app is up and running at port 3000')
})