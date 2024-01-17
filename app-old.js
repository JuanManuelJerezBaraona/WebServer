const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.write('Hola Mundo');
    res.end();

}).listen(3000);

console.log('Escuchando el puerto', 3000);