String.prototype.toJadenCase = function (str) {
    //...
    console.log('TEST');
    const strArr = str.split(' ')
    // .map(elem => elem[0].toUppercase())
    for(elem of strArr) {
        
    }
    return strArr
};
console.log(String.prototype.toJadenCase('How can mirrors be real if our eyes arent real'));