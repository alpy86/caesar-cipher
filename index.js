const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream');

const program = require('./parse-params');
const transformStream = require('./transform');

let readStream;
let writeStream;

if (program.input === '') {
  readStream = process.stdin;
} else {
  readStream = fs.createReadStream(path.resolve(__dirname, program.input));
}

if (program.output === '') {
  writeStream = process.stdout;
} else {
  writeStream = fs.createWriteStream(path.resolve(__dirname, program.output), { flags: 'a' });
}

pipeline(
  readStream,
  transformStream,
  writeStream,
  err => {
    if (err) {
      process.stderr.write('File not found');
      process.exit(1);
    } else console.log('Process finished');
  }
);
