const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
  client.on('server', text => {
    io.emit('connected', text);
  });
})


server.listen(8000); 