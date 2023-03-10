function solution(my_string) {
    return my_string.split('').map(string => string === string.toUpperCase() ? string.toLowerCase() : string.toUpperCase()).join('');
}
