function matchFinder(string1, string2) {
    if(typeof string1 !== 'string' || typeof string2 !== 'string'){
        return 'Please enter the string input';
    }
    const result = string1.includes(string2);
    return result;
}
console.log(matchFinder('john', 'ohn'));
console.log(matchFinder('JavaScript', 'Code'));
console.log(matchFinder('Peter parker', 'Pen'));
console.log(matchFinder('Peter Parker', 'pet'));
console.log(matchFinder('Peter Parker', 2));
console.log(matchFinder(52, 2)); 