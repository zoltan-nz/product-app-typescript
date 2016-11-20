const fs = require('fs');

const fileName = process.argv[2];

const fileContent = fs.readFileSync(fileName, 'utf8')
const LOC = fileContent.split('\n').length - 1

console.log(LOC);