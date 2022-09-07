require('dotenv').config();
const Server = require('./components/server/server');


const server = new Server();

server.listen();