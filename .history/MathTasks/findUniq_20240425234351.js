function findUniq(arr) {
    let newArr = arr.filter((elem, i) => elem[i] !== elem[i+1])
    console.log(newArr);
    return newArr
}
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));

