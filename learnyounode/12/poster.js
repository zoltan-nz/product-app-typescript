const http = require('http');

function createRequest() {
  var options = {
    hostname: 'localhost',
    port: 8080,
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
    }
  };

  var req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
      console.log('No more data in response.');
    });
  });

  req.on('error', (e) => {
    console.log(`problem with request: ${e.message}`);
  });

  return req.end('hello world');
}


// write data to request body
// req.write('hello world');
let send = [];
for(let i=1; i<10000; i++) {
  createRequest();
}
