function solution(arr, divisor) {
    const divisibleNumbers = arr.filter(num => num % divisor === 0);
    return divisibleNumbers.length !== 0 ? divisibleNumbers.sort((a, b) => a - b) : [-1];
}
