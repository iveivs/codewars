function findUniq(arr) {
    // let newArr = arr.filter( function(elem, i, arr) {
    //     return elem !== arr[i + 1]
    // } )
    // console.log(newArr);
    // return newArr
    let i = 0
    let oftenVar 
    while(i < arr.length){
        if(arr[i] == arr[i + 1]) {
            oftenVar = arr[i]
            break
        }
        i++;
    }
    const uniqueNumsSet = new Set(arr)
    const uniqArr = Array.from(uniqueNumsSet)
    let result = oftenVar == uniqArr[0] ? uniqArr[1] : uniqArr[0]
    return result
}
// console.log(findUniq([ 1, 0, 0 ]));
console.log(findUniq([ 0, 1, 0 ]));
console.log(findUniq([ 0, 0, 1 ]));
// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
// console.log(findUniq([ 1, 1, 2, 1, 1 ]));
// console.log(findUniq([ 3, 10, 3, 3, 3 ]));


