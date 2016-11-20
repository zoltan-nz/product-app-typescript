const fs = require('fs');
const path = require('path');

const dirParam = process.argv[2];
const extParam = process.argv[3];

fs.readdir(dirParam, (err, list) => {
  if (err) throw err;

  list.filter(filename => path.extname(filename).split('.').join('') === extParam).forEach(item => console.log(item));
});