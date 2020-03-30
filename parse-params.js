const { program } = require('commander');

program.version('0.0.1');

program
  .option('-s, --shift <number>', 'a shift')
  .option('-i, --input <inputFile>', 'an input file')
  .option('-o, --output <outputFile>', 'an output file', 'output.txt')
  .option('-a, --action <action>', 'an action encode/decode');

program.parse(process.argv);

if (program.action !== 'encode' && program.action !== 'decode') {
  process.stderr.write('Invalid param. Missing --action.');
  process.exit(1);
}

if (typeof Number(program.shift) !== 'number') {
  process.stderr.write('Invalid param. Missing or not number --shift.');
  process.exit(1);
}

module.exports = program;

