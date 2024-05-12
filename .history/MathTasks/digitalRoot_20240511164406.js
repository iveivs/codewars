// function digitalRoot(num) {
//     if(num === 0) {
//         return num
//     }
//     let res
//     while (num >= 10) {
//         let str = num.toString()
//         let newArr = []
//         for (let i = 0; i < str.length; i++) {
//             newArr.push(+str[i])
//         }
//         let sumOfArr = newArr.reduce((acc, elem) => {
//             return acc + elem
//         })
//         num = sumOfArr
//         res = num
//     }
//     return res
// }
// console.log(digitalRoot(132189));
// console.log(digitalRoot(0));