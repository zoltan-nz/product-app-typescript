const http = require('http');
const server = http.createServer();

const Duplex = require('stream').Duplex;

class UpperCaser extends Duplex {

  constructor(options) {
    // console.log('constructor called');
    super({ decodeStrings: false, highWaterMark: 1 });
    this._upperCased = '';
  }

  _read(size) {
    // console.log('_read', size);
    // console.log(this._upperCased);
    this.push(this._upperCased);
    this.push(null);
    this._upperCased = '';
  }

  _write(chunk, encoding, callback) {
    // console.log('_write', chunk, encoding, callback)

    this._upperCased = chunk.toUpperCase();
    callback();
  }
}

const upperCaser = new UpperCaser();

server.on('error', e => console.error('Server error', e));

server.on('request', (req, res) => manageRequest(req, res, upperCaser));

server.listen(process.argv[2]);
console.log('server listening', process.argv[2]);

// function manageRequest(req, res) {
//   if (req.method !== 'POST' ) return res.end('not valid request');
//
//   let posted = '';
//   req.setEncoding('utf8');
//   req.on('data', chunk => posted += chunk);
//   req.on('end', () => sendRespond(res, posted));
// }
//
// function sendRespond(res, data) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.write(data.toUpperCase());
//   res.end();
// }

function manageRequest(req, res, upperCaser) {
  if (req.method !== 'POST') return;

  // console.log('manage request called')
  req.setEncoding('utf8');
  req.pipe(upperCaser).pipe(res);

  console.log(require('v8').getHeapStatistics().used_heap_size);
}

// function sendRespond(res, data) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.write(data.toUpperCase());
//   res.end();
// }

