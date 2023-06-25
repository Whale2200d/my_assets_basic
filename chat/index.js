const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  // console.log('a user connected');
  // socket.on('disconnect', () => {
  //   console.log('user disconnected');
  // });

  // In order to send an event to everyone, Socket.IO gives us the io.emit() method.
  // This will emit the event to all connected sockets
  io.emit('some event', {
    someProperty: 'some value',
    otherProperty: 'other value',
  });

  // If you want to send a message to everyone except for a certain emitting socket, we have the broadcast flag for emitting from that socket:
  // socket.broadcast.emit('hi');

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
