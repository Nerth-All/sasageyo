const http = require('http');

const server = http.createServer((request, respon) => {
    response.end('Hello World')
})

server.listen(80, ()=>{
    console.log('Server jalan')
});