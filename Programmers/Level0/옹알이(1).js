function solution(babbling) {
    let count = 0;
    babbling.forEach(babble => {
        if (babble.split(/aya|ye|woo|ma/g).join('') === '') {
            count += 1;
        }
    });
    return count;
}
