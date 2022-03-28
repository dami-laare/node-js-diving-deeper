const http = require('http');

const server = http.createServer((req, res) => {
    console.log(Object.keys(req))
})

server.listen(4000, () => {
    console.log('Server listening on PORT: 4000')
})