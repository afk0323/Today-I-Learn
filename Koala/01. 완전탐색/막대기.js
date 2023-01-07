



const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const stickLength = [64, 32, 16, 8, 4, 2, 1];
let X = Number(input);
let countStick = 0;

stickLength.forEach(stick => {
    if(X >= stick){
        X -= stick;
        countStick += 1;
    }
});

if(X === 0) console.log(countStick);
