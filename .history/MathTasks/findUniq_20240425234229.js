function findUniq(arr) {
    return arr.filter((elem, i) => elem[i] !== elem[i+1])
}
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));

