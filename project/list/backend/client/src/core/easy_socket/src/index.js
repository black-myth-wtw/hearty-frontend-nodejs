const Easy_Socket = require('easy_sock');

const IP = '127.0.0.1',
    PORT = 4000,
    TIMEOUT = 6666;

const socket = new Easy_Socket({
    ip: IP,
    port: PORT,
    timeout: TIMEOUT,
    keepAlive: true,
});

module.exports = socket;
