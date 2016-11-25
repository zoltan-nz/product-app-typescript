const childProcess = require('child_process');
const util = require('util');

const http = require('http');
const https = require('https');
const net = require('net');
const url = require('url');

const fs = require('fs');

// const filename = process.argv[2];
//
// // READ FILE
//
// if (!filename)
//   return console.log('Usage: node _old_index.js filename');
//
// let tail = childProcess.execFile('tail', ['-f', filename]);
// console.log('start tailing...');
//
// tail.stdout.on('data', (data) => {
//   console.log(data);
// });

// FILE SERVER

const indexHtml = fs.createReadStream('index.html');

// LAUNCH SERVER

function handleRequest(req, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });

  indexHtml.pipe(response);
}

const server = http.createServer(handleRequest);

server.listen(8000, 'localhost', () => {
  console.log('opened server on', server.address());
});

server.on('connect', (request, socket, head) => {
  console.log('CONNECT');
  // console.log('request:', request);
  // console.log('socket:', socket);
  // console.log('head:', head);
});

server.on('connection', (socket) => {
  console.log('CONNECTION');
  // console.log('socket:', socket);
});

server.on('request', (request, response) => {
  console.log('REQUEST');
  // console.log('request:', request);
  // console.log('response:', response);
});

server.on('upgrade', (request) => {
  console.log('UPGRADE');
  // console.log('request:', request);
});


// server.on('connect', (req, cltSocket, head) => {
//   const srvUrl = url.parse(`http://${req.url}`);
//   const srvSocket = net.connect(srvUrl.port, srvUrl.hostname, () => {
//     cltSocket.write('HTTP/1.1 200 Connection Established\r\n' + 'Proxy-agent: Node.js-Proxy\r\n' + '\r\n');
//     srvSocket.write(head);
//     srvSocket.pipe(cltSocket);
//     cltSocket.pipe(srvSocket);
//   })
// });
//
// const client = net.createConnection({ port: 8000 }, () => {
//   console.log('connected to server!');
//   client.write('world!\r\n');
// });
//
// client.on('data', (data) => {
//   console.log(data.toString());
//   client.end();
// });
//
// client.on('end', () => {
//   console.log('disconnected from server');
// });

//
// server.listen(1337, 'localhost', () => {
//   const options = {
//     port: 1337,
//     hostname: 'localhost',
//     method: 'CONNECT',
//     path: 'www.google.com:80'
//   };
//
//   const req = http.request(options);
//   req.end();
//
//   req.on('connect', (res, socket, head) => {
//     console.log('got connected!');
//
//     socket.write('GET / HTTP/1.1\r\n' + 'Host: www.google.com:80\r\n' + 'Connection: close\rn\n' + '\r\n');
//     socket.on('data', (chunk) => {
//       console.log(chunk.toString());
//     });
//     socket.on('end', () => {
//       server.close();
//     })
//   })
//
// });