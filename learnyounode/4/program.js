const fs = require('fs');

const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (error, content) => {
  if (error) throw error;
  console.log(content.split('\n').length - 1)
})