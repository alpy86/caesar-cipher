const { Transform } = require('stream');

const commandParse = require('./parse-params');
const caesarCipher = require('./caesar-chiper');

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    let newShift = 0;

    if (commandParse.action === 'encode') {
        newShift = commandParse.shift;
    } else {
        newShift -= commandParse.shift;
    }

    this.push(caesarCipher(chunk, newShift));
    callback();
  }
});

module.exports = transformStream;