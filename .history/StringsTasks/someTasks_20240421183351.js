String.prototype.toJadenCase = function (str) {
    let strArr = str.split(' ')
    .map(elem => elem = elem[0]
    .toUpperCase() + elem.slice(1, elem.length))
    .join(' ').trim
    return strArr
};
console.log(String.prototype.toJadenCase('How can mirrors be real if our eyes arent real'));