// var uniqueInOrder=function(iterable){
//     let newArr = []
//     for(let i = 0; i < iterable.length; i++) {
//         console.log(i);
//         if(iterable[i] != iterable[i + 1]){
//             newArr.push(iterable[i]) 
//         }
//     }
//     return newArr
// }
// console.log(uniqueInOrder([1, 2, 1, 1, 1, 6]));
// console.log(uniqueInOrder('AAAABBBCCDAABBB'));
let arr = [1,2,2,3,4,5]
let newArr = []
const n = 2
for(let i = 0; i < arr.length; i++) {
    console.log('i=' , i);
    if(arr[i] === n) {
        console.log(arr[i]);
        arr.splice()
    }
}

// console.log(arr);