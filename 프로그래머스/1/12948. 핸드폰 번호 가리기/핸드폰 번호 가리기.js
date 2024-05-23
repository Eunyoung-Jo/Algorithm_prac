function solution(phone_number) {
    
    const length = phone_number.length;
    const hiddenPart = '*'.repeat(length - 4);
    const visiblePart = phone_number.slice(-4);
    
    return hiddenPart + visiblePart;
}
