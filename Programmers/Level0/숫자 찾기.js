function solution(num, k) {
    let answer = String(num).indexOf(k);
    return answer === -1 ? -1 : answer + 1;
}
