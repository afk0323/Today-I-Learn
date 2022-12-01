function solution(dots) {
    const slopes = [];
    for (let i = 0; i < dots.length; i++) {
        for (let j = i+1; j < dots.length; j++) {
            const slope = (dots[i][1]-dots[j][1]) / (dots[i][0]-dots[j][0]);
            if (slopes.includes(slope)) return 1;
            slopes.push(slope);
        }
    }
    return 0;
}
