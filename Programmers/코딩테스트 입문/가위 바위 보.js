function solution(rsp) {
    const rspGame = {
        2: 0,
        0: 5,
        5: 2
    };
    return [...rsp].map(game => rspGame[game]).join("");
}
