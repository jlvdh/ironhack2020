const chalk = require('chalk');
const http = require('http');

const server = http.createServer((req, res) => {

    console.log(req.url)

    if(req.url === '/about') {
        res.write('this is the about page')
        // res.end()
    } else {
        res.write('<h1>page not found</h1>')
        // res.end();
    }
})

server.listen(3000);

console.log(chalk.blue('Hello world!'));

