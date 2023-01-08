let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let nineDwarfs = input.map(Number);
let sevenDwarfs = [];

for (let i = 0; i < 8; i++) {
    for (let j = i+1; j < 9; j++) {
        if (nineDwarfs.reduce((acc, cur) => acc + cur, 0) === nineDwarfs[i] + nineDwarfs[j] + 100) {
            sevenDwarfs = nineDwarfs.filter(dwarf => dwarf !== nineDwarfs[i] && dwarf !== nineDwarfs[j]);
            break;
        }
    }
    if (sevenDwarfs.length !== 0) break;
}
sevenDwarfs.sort((a, b) => a - b).map(dwarf => console.log(dwarf));
