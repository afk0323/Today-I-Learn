const n = require('fs').readFileSync("/dev/stdin").toString().trim();
const N = Number(n);

function solution(n){
    if(n === 1 || n === 3) return -1;
    // 나머지가 4, 2인 경우
    if(n % 5 % 2 === 0) return Math.floor(n / 5) + n % 5 / 2;
    // 나머지가 3, 1인 경우
    if(n % 5 % 2 !== 0) return Math.floor(n / 5) + (n % 5 + 5) / 2 - 1;
}

console.log(solution(N));
