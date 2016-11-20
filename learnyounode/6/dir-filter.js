const fs = require('fs');
const path = require('path');

function dirFilter(dirName, fileExt, callback) {

  fs.readdir(dirName, (err, list) => {
    if (err) return callback(err, null);

    const filteredFileList = list.filter(filename => isTypeRight(filename, fileExt));

    return callback(null, filteredFileList);
  });
}

function isTypeRight(file, extension) {
  return path.extname(file).split('.').join('') === extension;
}

module.exports = dirFilter;
