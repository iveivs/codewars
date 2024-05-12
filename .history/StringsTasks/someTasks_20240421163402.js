String.prototype.toJadenCase = function (str) {

    const strArr = str.split(' ')
    // 
    // .map(elem => elem = elem[0].toUpperCase() + elem.slice(1, elem[elem.length - 1]))
    
    for(elem of strArr) {
        console.log(' ', elem[elem.length - 1]);
        console.log('LENGTH ', elem.length - 1);
        console.log(elem[0].toUpperCase() + elem.slice(1, 3));
    }
    return strArr
};
console.log(String.prototype.toJadenCase('How can mirrors be real if our eyes arent real'));