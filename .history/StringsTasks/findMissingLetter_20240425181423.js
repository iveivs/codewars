function findMissingLetter(array) {
    let abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let isCapitalLetter
    if(array[0] === array[0].toUpperCase()){
        isCapitalLetter = true
    } else {
        isCapitalLetter = false
    }
    console.log(isCapitalLetter);
    let newArr = array.map(elem => elem.toLowerCase())

    const startIputArr = newArr[0]
    const endInputArr = newArr[newArr.length - 1]

    const indexTostart = abc.indexOf(startIputArr)
    const indexToEnd = abc.indexOf(endInputArr) + 1

    const slicedArr = abc.slice(indexTostart, indexToEnd)
    console.log(slicedArr);
    
    for (let i = 0; i < slicedArr.length; i++) {
        if(newArr[i] !== slicedArr[i]) {
            if(isCapitalLetter) {
                return `${slicedArr[i].toUpperCase()}`
            } else {
                return `${slicedArr[i]}`
            }
            
        }
        
    }

    return 
}
console.log(findMissingLetter(['b','c','d','f','g']));
console.log(findMissingLetter(['O','Q','R','S']));
// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'