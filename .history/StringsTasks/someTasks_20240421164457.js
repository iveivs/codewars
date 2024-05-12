String.prototype.toJadenCase = function (str) {
    const strArr = str.split(' ')
    .map(elem => elem = elem[0].toUpperCase() + elem.slice(1, elem.length)).join(' ')
    return strArr
};
console.log(String.prototype.toJadenCase('How can mirrors be real if our eyes arent real'));