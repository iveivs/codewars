function findUniq(arr) {
    let newArr = arr.filter( function(elem, i, arr) {
        console.log(i);
    } )
    console.log(newArr);
    return newArr
}
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));

