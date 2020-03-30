const os = require('os');
const CODE_LETTER = require("./code-letter");

let caesarChiper = function (value, shift) {
    let arrLetters = value.toString('utf8').split('');
    let arrShiftLetters = [];
    let isUpperCase;
    arrLetters.forEach(val => {
        if (val.charCodeAt(0) >= CODE_LETTER.A_CODE && val.charCodeAt(0) <= CODE_LETTER.Z_CODE) {
            isUpperCase = true;
            arrShiftLetters.push(String.fromCharCode(findingLetter(val.charCodeAt(0), shift, isUpperCase)));
            console.log(`tr: ${String.fromCharCode(findingLetter(val.charCodeAt(0), shift, isUpperCase))}`);
        } else if (val.charCodeAt(0) >= CODE_LETTER.a_CODE && val.charCodeAt(0) <= CODE_LETTER.z_CODE) {
            isUpperCase = false;
            arrShiftLetters.push(String.fromCharCode(findingLetter(val.charCodeAt(0), shift, isUpperCase)));
        } else {
            arrShiftLetters.push(val);
        }
    });
    return os.EOL + arrShiftLetters.join('');
}

function findingLetter(num, shift, isUpperCase) {
    let newNum = num - (shift % CODE_LETTER.sumLetters);
    if (isUpperCase) {
        if (newNum < CODE_LETTER.A_CODE) {
            newNum = CODE_LETTER.Z_CODE - (CODE_LETTER.A_CODE - newNum);
        }
        if (newNum > CODE_LETTER.Z_CODE) {
            newNum = newNum - CODE_LETTER.Z_CODE + CODE_LETTER.A_CODE;
        }
    } else {
        if (newNum < CODE_LETTER.a_CODE) {
            newNum = CODE_LETTER.z_CODE - (CODE_LETTER.a_CODE - newNum);
        }
        if (newNum > CODE_LETTER.z_CODE) {
            newNum = newNum - CODE_LETTER.z_CODE + CODE_LETTER.a_CODE;
        }
    }
    return newNum;
};

module.exports = caesarChiper;
