const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const file = process.argv[3];

const server = http.createServer();
server.on('error', e => console.log(e));
server.on('request', (req, res) => requestListener(req, res, file))

server.listen(port);
console.log('listening on', port);

function requestListener(req, res, file) {
  const fileStream = fs.createReadStream(file);
  fileStream.pipe(res);
}

