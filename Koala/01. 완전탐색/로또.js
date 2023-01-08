let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
input.pop(); // 마지막 줄 제거하기
input = input.map(n => n.split(' ').map(Number));

let answer = "";
let K;
let S;

input.forEach(x => {
    [K, ...S] = x;
    DFS(0, []);
    answer += '\n';
});

function DFS(L, pick) {
    if (pick.length === 6) {
        answer += `${pick.join(' ')}\n`;
        return;
    }
    for (let i = L; i < K; i++) {
        DFS(i+1, [...pick, S[i]]);
    }
}

console.log(answer);
