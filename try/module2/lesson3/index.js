const http = require('http');

let counter = 0
const server = http.createServer((request, response) => {
    counter++
    console.log(request.url);

    if (request.url === '/') {
        response.write('<h1>welcome to the website</h1>' + counter);
        response.end()
    }
})

server.listen(3000)