const childProcess = require('child_process');
const util = require('util');

const http = require('http');
const net = require('net');
const url = require('url');

// const filename = process.argv[2];
//
// // READ FILE
//
// if (!filename)
//   return console.log('Usage: node index.js filename');
//
// let tail = childProcess.execFile('tail', ['-f', filename]);
// console.log('start tailing...');
//
// tail.stdout.on('data', (data) => {
//   console.log(data);
// });

// LAUNCH SERVER

const proxy = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('okay');
});

proxy.listen(8000, 'localhost', () => {
  console.log('opened server on', proxy.address());
});

proxy.on('connect', (req, cltSocket, head) => {
  const srvUrl = url.parse(`http://${req.url}`);
  const srvSocket = net.connect(srvUrl.port, srvUrl.hostname, () => {
    cltSocket.write('HTTP/1.1 200 Connection Established\r\n' + 'Proxy-agent: Node.js-Proxy\r\n' + '\r\n');
    srvSocket.write(head);
    srvSocket.pipe(cltSocket);
    cltSocket.pipe(srvSocket);
  })
});

const client = net.createConnection({ port: 8000 }, () => {
  console.log('connected to server!');
  client.write('world!\r\n');
});

client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});

client.on('end', () => {
  console.log('disconnected from server');
});

//
// proxy.listen(1337, 'localhost', () => {
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
//       proxy.close();
//     })
//   })
//
// });