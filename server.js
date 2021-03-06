const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);


io.on('connection', socket => {
  console.log('user connected')
});


const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Server listening on port ${port}`));
