const watch = require('chokidar').watch;
const fs = require('fs');
const http = require('http');
const childProcess = require('child_process');

const FILE = './sample.txt';
const INDEX_HTML = './index.html';

// READ FILE

let tail = childProcess.execFile('tail', ['-f', '-n20', FILE]);
console.log('start tailing...');


// SERVE INDEX

function serveContent(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.createReadStream(INDEX_HTML).pipe(res);
}

const server = http.createServer(serveContent);

server.on('request', (socket) => {
  console.log('REQUEST');
  // console.log('socket:', socket);
});

server.listen(8080);
console.log('server listening 8080');

// SERVE socket.io file

const SocketIO = require('socket.io');

const io = new SocketIO(8081);

io.on('connection', (socket) => {
  console.log('socket connection');
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });

  tail.stdout.on('data', (data) => {
    console.log(data);
    socket.emit('tail', { line: data });
  });

});
