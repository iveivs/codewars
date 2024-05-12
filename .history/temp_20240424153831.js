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
console.log(getNewArr());
function arrayDiff(a, b) {

    let i = 0
    let j = 0
    while(j < b.length) {

        
    }
    return 
}
console.log(arrayDiff([1,2,2,3,4, 4],[2, 4]));
