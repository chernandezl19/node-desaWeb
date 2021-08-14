const http = require('http');

const servidor = http.createServer((request, response)=>{
    response.writeHead(200, {'content-type':'text/html'});
    response.write('<!DOCTYPE html>    <html lang="en">    <head>    </head>    <body><h1>Bienvenidos</h1></body> </html>');
    response.end
});

servidor.listen(8080);

console.log('iniciado');