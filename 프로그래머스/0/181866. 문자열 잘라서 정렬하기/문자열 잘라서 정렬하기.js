function solution(myString) {
    let segments = myString.split('x');
    let filteredSegments = segments.filter(segment => segment !== '');
    
    filteredSegments.sort();
    
    return filteredSegments;
}
