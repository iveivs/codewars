// let arr = ['as', 'swq', 'qwa']
// let res = arr.reduce((acc, elem, i) => acc += elem)
// console.log(res);

const array = [2, 1, 5, 3, 8, 7, 9]
let arr2 = array.sort((a,b) => {
    console.log('start');
    console.log(a);
    console.log(b);
    console.log('');
    return a - b
})
console.log(arr2);