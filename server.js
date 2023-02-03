const http = require('http');
const app = require('./app');

const port = process.env.port || 5000;
const server = http.createserver(app);

server.listen(port, hostname()=>
{
    console.log('started on port ${port}');
});