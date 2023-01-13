const N = require('fs').readFileSync("/dev/stdin").toString().trim();
let numbers = Array.from({length: N}, (_, i) => i+1).join('');
let answer = [];

function permutation(num, s) {
    // 1. 재귀함수를 멈춰야할 조건
    if(num === '') answer.push(s.split('').join(' '));

    // 2. 재귀를 돌면서 변경되어야 될 부분
    for (let i = 0; i < num.length; i++) {
        // (num[i]를 제외한 나머지, 현재 쌓은 스택 + num[i]) 
        permutation(num.slice(0, i) + num.slice(i + 1), s + num[i]);       
    }
}

permutation(numbers, '');
console.log(answer.join('\n'));
