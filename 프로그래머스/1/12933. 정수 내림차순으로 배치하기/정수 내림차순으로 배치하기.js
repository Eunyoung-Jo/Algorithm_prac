function solution(n) {
    
  const digits = String(n).split('');
  const sortedDigits = digits.sort((a, b) => b - a);
    
  return parseInt(sortedDigits.join(''));
}
