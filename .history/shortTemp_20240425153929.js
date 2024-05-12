function findMissingLetter(array) {
    let abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    console.log(array.indexOf(array[0]), array.indexOf(array[array.length -1]));
    let slicedArr = abc.slice(array.indexOf(array[0]), (abc.indexOf(array[array.length -1]))
    
    // return ' '
    return slicedArr
}
console.log(findMissingLetter(['a','b','c','d','f']));
// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'