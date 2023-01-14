const n = require('fs').readFileSync("/dev/stdin").toString().trim();
const N = Number(n);
const MOD = 10**9 + 7;
const fib = [0, 1, 1];

for(let i = 3; i <= N; i++){
    fib.push((fib[i-1] + fib[i-2]) % MOD);
}

console.log(fib[N]);
