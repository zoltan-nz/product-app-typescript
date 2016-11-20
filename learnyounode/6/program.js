const dirFilter = require('./dir-filter');

const dirParam = process.argv[2];
const extParam = process.argv[3];

function printOut(err, list) {
  if (err) throw err;

  list.forEach(item => console.log(item));
}

dirFilter(dirParam, extParam, printOut);