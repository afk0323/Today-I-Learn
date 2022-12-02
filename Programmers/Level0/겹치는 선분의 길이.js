function solution(lines) {
    let count = 0;
    const arr = [];
    const result = {};
    lines.forEach((line) => {
        for(let i = line[0]; i <= line[1]; i++){
            arr.push(i);
        }
    })

    for(const el of arr) {
        result[el] = (result[el] || 0) + 1;
    }

    for(let i = 0; i < Object.keys(result).length; i++){
        if(result[i] > 1 && result[i+1] > 1){
            count += 1;
        }
    }
    
    return count;
}
