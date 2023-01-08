let [N, digit] = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ');
let range = Array.from({length: N}, (_, i) => i+1).join('');

const regex = new RegExp(`[${digit}]`, 'g');
const frequency = range.match(regex).length;

console.log(frequency);
