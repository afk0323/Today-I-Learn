const solution = (n) => Array.from({length: n}, (v, i) => i + 1).filter(v => n % v === 0).length;
