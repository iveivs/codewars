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
        // console.log('test break');
    }
    const uniqueNmes = new Set(arr)

    console.log('');
    return oftenVar
}
console.log(findUniq([ 1, 2, 1, 1, 1]));

