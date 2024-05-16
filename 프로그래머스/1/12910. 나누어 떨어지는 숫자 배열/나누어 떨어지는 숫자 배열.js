function solution(arr, divisor) {
    let Numbers = [];

    for (let num of arr) {
        if (num % divisor === 0) {
            Numbers.push(num);
        }
    }

    if (Numbers.length === 0) {
        return [-1];
    }

    return Numbers.sort((a, b) => a - b);
}
