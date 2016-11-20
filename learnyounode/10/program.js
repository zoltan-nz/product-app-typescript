const net = require('net');
const moment = require('moment');

const portNumber = process.argv[2];

// "YYYY-MM-DD hh:mm"
function formattedDate() {

  return moment().format("YYYY-MM-DD HH:mm");
}

function listener(socket) {
  socket.end(formattedDate() + "\n");
}

const server = net.createServer(listener);

server.listen(portNumber);
console.log(`listening on ${portNumber}`);