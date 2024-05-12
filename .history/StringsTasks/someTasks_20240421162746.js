String.prototype.toJadenCase = function (str) {

    const strArr = str.split(' ').map(elem => elem = elem[0].toUpperCase() + elem.slice(1, elem[elem.length - 1]))
    // 
    // for(elem of strArr) {
    //     console.log(elem[0].toUpperCase());
    // }
    return strArr
};
console.log(String.prototype.toJadenCase('How can mirrors be real if our eyes arent real'));