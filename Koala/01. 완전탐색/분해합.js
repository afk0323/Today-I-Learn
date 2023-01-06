const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const disassembleSum = Number(input);

let startNum = disassembleSum - String(disassembleSum).length * 9;
let minConstructor = 0;

if (startNum < 0) startNum = 0;
for (let i = startNum; i < disassembleSum; i++) {
    const calculateSum = String(i).split('').map(n => Number(n)).reduce((acc, cur) => acc+cur, 0) + i;
    if (calculateSum === disassembleSum) {
        minConstructor = i;
        break;
    }
}

console.log(minConstructor);
