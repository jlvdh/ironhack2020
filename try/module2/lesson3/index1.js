const express = require('express');

const app = express();

app.get('/', (request, response, next) => {
    console.log(request)
    response.send('welcome')
})

app.listen(3000, () => {
    console.log('app listening ')
})