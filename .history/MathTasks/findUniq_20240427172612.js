function findUniq(arr) {
    // let newArr = arr.filter( function(elem, i, arr) {
    //     return elem !== arr[i + 1]
    // } )
    // console.log(newArr);
    // return newArr
    let i = 0
    let oftenVar 
    while(i < arr.length){
        console.log(arr[i])
        if(arr[i] == arr[i + 1]) {
            oftenVar = arr[i]
            break
        }
        i++;
        console.log('test break');
    }
    console.log('test out of break');
    return oftenVar
}
console.log(findUniq([ 1, 1, 1, 1, 1 ]));

