var uniqueInOrder=function(iterable){
    let newArr = []
    for(let i = 0; i < iterable.length; i++) {
        
        if(iterable[i] !== iterable[i + 1]){
            iterable[i]
        }
    }
    return newArr
}
console.log(uniqueInOrder([1, 2, 1, 2, 3, 4, 5, 2, 4, 1, 1, 6]));
console.log(uniqueInOrder('AAAABBBCCDAABBB'));