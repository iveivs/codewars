// let arr = ['as', 'swq', 'qwa']
// let res = arr.reduce((acc, elem, i) => acc += elem)
// console.log(res);

const array = [2, 1, 5, 3, 8, 7, 9]
let arr2 = array.sort((a,b) => {
    console.log('a', a);
    console.log('b', b);
    return a - b
})
console.log(arr2);

// function compareNumbers(a, b) {
//     return a - b;
// }