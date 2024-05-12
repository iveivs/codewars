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
// ==========

// let arr = [1,2,2,3,4,5]
// let newArr = []
// const n = 2


// if(arr.includes(n)){
//     console.log('include');
//     for(let i = 0; i < arr.length; i++) {
//         console.log('i=' , i);
//         if(arr[i] === n) {
//             console.log('arr[i]=',arr[i]);
//             arr.splice(arr[i],1)
//         }
//     }
// }
// console.log(arr);

// const haystack = 'мама мыла раму'
// let lastResult

// // напечатаем индексы всех букв М во фразе
// while (lastResult !== -1) {
//     lastResult = haystack.indexOf('м', lastResult + 1)
//     if (lastResult !== -1) {
//         console.log(lastResult)
//     }
// }

// const haystack = [1, 2, 3, 4, 5, 3, 1, 2, 3]
// let lastResult

// while (lastResult !== -1) {
//     lastResult = haystack.indexOf(3, lastResult + 1)
//     if (lastResult !== -1) {
//         console.log(lastResult)
//         haystack.splice(lastResult, 1)
//     }
// }
// console.log(haystack);

// ============

// const guestList = ['Петя', 'Настя', 'Артур', 'Лена', 'Настя', 'Эммануил']
// const guest = 'Ann'// получаем откуда-нибудь имя гостя

// if (guestList.indexOf(guest) >= 0) {
//     // пускаем на вечеринку
//     console.log('Good');

// } else {
//     // отправляем домой
//     console.log('Bad');
// }

// =============

// function getNewArr() {
//     const arr = [1,2,2,3,4,5]
//     const n = 2
//     let lastResult
//     let newArr = []
//     // напечатаем индексы всех букв М во фразе
//     while (lastResult !== -1) {
//         lastResult = arr.indexOf(n, lastResult + 1)
//         if (lastResult !== -1) {
//             for(elem of arr){
//                 if(elem !== arr[lastResult]){
//                     newArr.push(elem)
//                 }
//             }
//             return newArr
//         }
//     }
// }
// console.log(getNewArr());

// function arrayDiff(a, b) {

//     let i = 0
//     let j = 0
//     let lastResult
//     let newArr = []
//     while (j < b.length) {
//         console.log('test');
//         while (lastResult !== -1) {
//             console.log('test2');
//             lastResult = a.indexOf(b[j], lastResult + 1)
//             if (lastResult !== -1) {
//                 for (elem of a) {
//                     if (elem !== a[lastResult]) {
//                         newArr.push(elem)
//                     }
//                 }
//                 // return newArr
//             }
//             j++
//             i=0
//         }
        
//     }
//     return newArr
// }
// console.log(arrayDiff([1, 2, 2, 3, 4, 4], [2, 4]));
//  = = = = = = = =
// function arrayDiff(a, b) {

//     let i = 0
//     let j = 0
//     let lastResult
//     let newArr = []
//     while (i < b.length) {
//         console.log('i =', i);
//         while (lastResult !== -1) {
//                 lastResult = a.indexOf(b[i], lastResult + 1)
//                 if (lastResult !== -1) {
//                     console.log(lastResult)
//                     a.splice(lastResult, 1)
//                 }
//             }
//             i++
//     }
//     return a
// }
// console.log(arrayDiff([1, 2, 2, 3, 4, 4], [2, 4]));
// ----------

const haystack = [1, 2, 2, 1, 3, 2]
let lastResult
let newArr = [...haystack]
while (lastResult !== -1) {
    lastResult = haystack.indexOf(2, lastResult + 1)
    if (lastResult !== -1) {
        newArr.tosplice(lastResult, 1)
        console.log(lastResult);
    }
}
console.log(newArr);


