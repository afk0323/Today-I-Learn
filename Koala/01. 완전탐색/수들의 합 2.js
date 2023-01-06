const [n, m, ...arr] = require('fs').readFileSync("/dev/stdin").toString().trim().split(/\s/);
const N = Number(n);
const M = Number(m);
const ARR = arr.map(n => Number(n));

let numberCases = 0;
for (let i = 0; i < N; i++){
    let numberSum = 0;
    for (let j = i; j < N; j++){
        numberSum += ARR[j];
        if(numberSum === M) numberCases += 1;
    }
}

console.log(numberCases);
