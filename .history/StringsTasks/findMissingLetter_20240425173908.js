function findMissingLetter(array) {
    let abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    // console.log(array.indexOf(array[0]), array.indexOf(array[array.length -1]));
    // let slicedArr = abc.slice(array.indexOf(array[0]), abc.indexOf(array[array.length -1]))
    const startIputArr = array[0]
    const endInputArr = array[array.length - 1]
    console.log(startIputArr, endInputArr);

    const indexTostart = abc.indexOf(startIputArr)
    const indexToEnd = abc.indexOf(endInputArr) + 1
    console.log(indexTostart, indexToEnd);

    const slicedArr = abc.slice(indexTostart, indexToEnd)
    console.log(slicedArr);
    
    for (const [i,k] of slicedArr) {
        console.log(slicedArr);
    }

    return 
}
console.log(findMissingLetter(['b','c','d','f','g']));
// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'