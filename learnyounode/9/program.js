const http = require('http');

const [,, ...urls] = process.argv;

const collectedResponses = urls.map(url => _sendGet(url));
Promise.all(collectedResponses).then(res => logResults(res));

function logResults(results) {
  results.forEach(result => console.log(result));
}

function _sendGet(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (response) => _concatenateResponseData(response, resolve))
      .on('error', e => _manageHttpGetError(e, reject));
  });
}


function _concatenateResponseData(response, resolve) {
  let wholeDataStream = '';
  response.setEncoding('utf8');
  response.on('data', (chunk) => {
    wholeDataStream += chunk;
  });

  response.on('end', () => {
    return resolve(wholeDataStream);
  });
}

function _manageHttpGetError(e, reject) {
    console.log('error with get', e.message);
    return reject(e);
}