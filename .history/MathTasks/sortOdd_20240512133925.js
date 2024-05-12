function sortArray(array) {
    const oddNumArr = array.filter(elem => elem % 2 !== 0)

    const sortedCorrectly = oddNumArr.toSorted((a, b) => a - b)
    console.log(sortedCorrectly);
    
    const maskArr = array.map((elem, i) => elem % 2 ? elem : 0)

    for(let i = 0; i < maskArr.length)
    
    return maskArr
}

    console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]

// = = = = = 
// function sortArray(array) {
//     for(let i = 0; i < array.length; i++) {
        
//         if(array[i] % 2 == 0){
//             continue
//         }

//         console.log(i);
//     }
    
// }
// console.log(sortArray([5, 8, 6, 3, 4, 1]))