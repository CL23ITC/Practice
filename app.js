const http = require('http');
const routes = require('./route');

const server = http.createServer(routes.ABC);
console.log(routes.XYZ);

server.listen(4000);