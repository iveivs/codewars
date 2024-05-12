var uniqueInOrder=function(iterable){
    let newArr = Array.from(new Set(iterable)) 
    console.log(typeof newArr);
    return newArr   
}
console.log(uniqueInOrder([1, 2, 1, 2, 3, 4, 5, 2, 4, 1, 1, 6]));
console.log(uniqueInOrder('dsfsadsfa'));