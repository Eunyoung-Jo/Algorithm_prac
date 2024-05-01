function solution(n) {
    let reversedStr = String(n).split('').reverse().join('');
    let result = reversedStr.split('').map(Number);
    return result;
}
