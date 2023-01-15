const [n, arr] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const N = Number(n);
const ARR = arr.split(' ').map(Number);
const DP = new Array(N).fill(1);
    
for(let i = 0; i < N; i++){
    for(let j = 0; j < i; j++){
        if(ARR[i] > ARR[j]) DP[i] = Math.max(DP[i], DP[j] + 1);
    }
}

console.log(Math.max(...DP));
