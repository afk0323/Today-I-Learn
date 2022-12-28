function solution(n) {
    let divisor = Array.from({length: n}, (v, idx) => idx+1);
    return divisor.filter(num => n % num === 0);
}
