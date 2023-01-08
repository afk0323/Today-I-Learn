const N = require('fs').readFileSync("/dev/stdin").toString().trim();
let numbers = Array.from({length: N}, (_, i) => i+1).join('');
let dictionaryOrder = [];

function permutation(numbers, combination) {
    if(numbers === '') dictionaryOrder.push(combination.split('').join(' '));
    for (let i = 0; i < numbers.length; i++) {
        // (fixed를 제외한 나머지, fixed) 
        permutation(numbers.slice(0, i) + numbers.slice(i+1), combination + numbers[i]);       
    }
}

permutation(numbers, '')
console.log(dictionaryOrder.join("\n"));
