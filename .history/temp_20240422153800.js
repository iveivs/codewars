var uniqueInOrder=function(iterable){
    let newArr = []
    for(let i = 0; i < iterable.length; i++) {
        console.log(i);
        if(iterable[i] != iterable[i + 1]){
            newArr iterable[i]
        }
    }
    return newArr
}
// console.log(uniqueInOrder([1, 2, 1, 1, 1, 6]));
console.log(uniqueInOrder('AAAABBBCCDAABBB'));