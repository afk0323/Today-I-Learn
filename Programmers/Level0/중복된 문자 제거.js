function solution(my_string) {
    const removeDuplicate = new Set(my_string.split(''));
    const leftString = [...removeDuplicate].join('');
    
    return leftString;
}
