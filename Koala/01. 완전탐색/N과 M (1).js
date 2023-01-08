const [n, m] = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ');
const N = Number(n);
const M = Number(m);

const visited = new Array(N);
let process = [];
let result = '';

function dfs(cnt) {
  if (cnt === M) {
    result += `${process.join(' ')}\n`;
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i] === true) continue;
    visited[i] = true;
    process.push(i + 1);
    dfs(cnt + 1);
    process.pop();
    visited[i] = false;
  }
}

dfs(0);
console.log(result);
