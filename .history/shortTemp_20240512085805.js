// let arr = ['as', 'swq', 'qwa']
// let res = arr.reduce((acc, elem, i) => acc += elem)
// console.log(res);

const array = [2, 1, 5, 3, 8, 7, 9]
let arr2 = array.sort((a,b) => {
    if(a % 2 == 0) {
        return 1
    } 
    if( a % 2) {
        return -1
    }
})
console.log(arr2);