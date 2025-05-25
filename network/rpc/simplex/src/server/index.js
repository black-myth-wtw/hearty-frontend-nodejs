const net = require('net');

const PORT = 4000;

const server = net.createServer(socket => {
    socket.on('data', data => {
        console.log(data.toString().trim());
    });
});

server.listen(PORT, () => {
    console.log(`The rpc simplex server is running at http://localhost:${PORT}!`);
});
