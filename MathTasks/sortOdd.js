function sortArray(array) {
    const oddNumArr = array.filter(elem => elem % 2 !== 0)
    const sortedCorrectly = oddNumArr.toSorted((a, b) => a - b)
    const newArr = []

    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 !== 0){
            newArr.push(sortedCorrectly[0]) 
            sortedCorrectly.shift()
        } else {
            newArr.push(array[i])
        }
    }
    return newArr
}

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));