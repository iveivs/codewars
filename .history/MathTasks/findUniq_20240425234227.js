function findUniq(arr) {
    return arr.filter((elem, i) => elem[i] !== elem[i+1])
}
console.log(findUniq());

