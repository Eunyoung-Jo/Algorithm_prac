function solution(N) {
    let sum = 0;
    for (let i = 0; i < String(N).length; i++) {
        sum += Number(String(N)[i]);
    }
    return sum;
}