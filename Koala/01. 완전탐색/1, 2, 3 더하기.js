const [t, ...arr] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
const numberCases = Number(t);
let testCases = arr.map(n => Number(n));
let numberSum = [0, 1, 2, 4];

testCases.forEach(test => {
    for(let i = 4; i <= test; i++){
        numberSum[i] = numberSum[i-1] + numberSum[i-2] + numberSum[i-3];
    }
    console.log(numberSum[test]);    
});
