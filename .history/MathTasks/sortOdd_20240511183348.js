function sortArray(array) {
    const oddNumArr = []
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 != 0){
        oddNumArr.push(array[i])
        }
    }
    console.log(oddNumArr);
}

console.log(sortArray());
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]