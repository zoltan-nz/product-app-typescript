const http = require('http');

const url = process.argv[2];

http.get(url, (response) => {

  response.setEncoding('utf8');

  let wholeDataStream = '';
  response.on('data', (chunk) => {
    wholeDataStream += chunk;
  });

  response.on('end', () => {
    console.log(wholeDataStream.length);
    console.log(wholeDataStream);
  });
});