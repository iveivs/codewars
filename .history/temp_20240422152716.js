var uniqueInOrder=function(iterable){
    
    return Array.from(new Set(iterable))    
}
console.log(uniqueInOrder([1, 2, 1, 2, 3, 4, 5, 2, 4, 1, 1, 6]));
console.log(uniqueInOrder('dsfsadsfa'));