const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('connected');

    socket.on('typing', (data) => {
        socket.broadcast.emit('update', data);
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
});

server.listen(3000, () => {
    console.log('http://localhost:3000');
});
