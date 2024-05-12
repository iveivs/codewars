function findMissingLetter(array) {
    let abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let splicedArr = abc.toSpliced(array[0], array[-1])
    // return ' '
    return splicedArr
}
console.log(findMissingLetter(['a','b','c','d','f']));
// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'