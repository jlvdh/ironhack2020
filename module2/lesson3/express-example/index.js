const express = require('express');

const app = express();

// app.get('/400.jpg', (req, res) => {
//     res.send('cat picture')
// })

app.use(express.static('public'));

app.get('/cats', (req, res) => {
    res.sendFile(`${__dirname}/views/cats.html`)
})

app.get('/about', (req, res) => {
    res.send('<h1>the about page<h1>')
})

app.get('/', (req, res) => {
    res.send('the index page')
})

app.listen(3000, () => {
    console.log('Server is listening at port 3000')
})