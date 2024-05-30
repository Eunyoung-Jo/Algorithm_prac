function solution(number) {
    const digits = number.split('').map(Number);
    const digitSum = digits.reduce((acc, curr) => acc + curr, 0);
    const result = digitSum % 9;
    
    return result;
}
