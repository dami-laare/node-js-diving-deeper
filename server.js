const http = require('http');
const routes = require('./routes')
require('dotenv').config({path: './config.env'})

const server = http.createServer(routes)

server.listen(process.env.PORT || 4000, () => {
    console.log(`Server listening on PORT: ${process.env.PORT||4000}` )
})