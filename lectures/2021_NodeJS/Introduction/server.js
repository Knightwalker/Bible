var tcp = require("net");

const port = 8000;
const host = "127.0.0.1";

// create an instance of the server
var server = tcp.createServer();
server.addListener("connection", (socket) => {
  
  console.log(`client connected from ${socket.remoteAddress}`);
  
  socket.on('end', () => {
    console.log('client disconnected');
  });

  socket.end();

});

// start listening with the server on given port and host
server.listen(port, host, () => {
  console.log(`Server started on ${host}:${port}`)
})