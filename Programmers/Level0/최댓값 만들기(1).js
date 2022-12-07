function solution(numbers) {
    numbers.sort((x, y) => x - y);
    return numbers.pop() * numbers.pop();
}
