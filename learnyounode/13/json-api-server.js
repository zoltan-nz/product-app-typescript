const http = require('http');
const url = require('url');
const moment = require('moment');

const port = process.argv[2];
const server = http.createServer();

const parseTime = (queryParam) => {
  const iso = moment(queryParam.iso)

  return {
    hour: iso.hour(),
    minute: iso.minute(),
    second: iso.second()
  }
};

const unixTime = (queryParam) => {
  const unixtime = moment(queryParam.iso).valueOf();
  return { unixtime }
};

const router = (req, res) => {
  const parsedUrl = url.parse(req.url, true, true);
  const pathName = parsedUrl.pathname;
  const queryParam = parsedUrl.query;

  let responseJson = {};

  switch (pathName) {
    case '/api/parsetime':
      responseJson = parseTime(queryParam);
      break;
    case '/api/unixtime':
      responseJson = unixTime(queryParam);
      break;
    default:
      responseJson = { message: 'Not found' }
  }

  res.writeHead(200, { 'Content-Type': 'application.json' });
  res.end(JSON.stringify(responseJson));
};

server.on('error', e => console.log(e) );
server.on('request', router);

server.listen(port);
console.log('server listening on', port);