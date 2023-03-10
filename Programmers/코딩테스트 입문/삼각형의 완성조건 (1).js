function solution(sides) {
    sides.sort((x, y) => x - y);
    if (sides[2] < sides[0] + sides[1]) return 1;
    if (sides[2] >= sides[0] + sides[1]) return 2;
}
