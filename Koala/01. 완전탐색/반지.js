let [find, number, ...rings] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

rings.forEach(ring => {
    if(ring.repeat(2).search(find) === -1) number -= 1;
});

console.log(number);
