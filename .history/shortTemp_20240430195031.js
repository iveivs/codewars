// let num = 138094
// let str = num.toString()
// let newArr = []
// for(let i = 0; i < str.length; i++) {
//     newArr.push(+str[i])
// }
// let sumOfArr = newArr.reduce((acc, elem) => {
//     return acc + elem
// })
// console.log(sumOfArr);

// function sumOfDigit(numbers) {

// }

function func(numb) {
    console.log('start');
    for (let i = 0; i < numb.length; i++) {
        console.log(i);
        if (i = 5) {
            return 'if'
        }
        console.log('test', i);
    }
    console.log('testend');
    return 'end'
}
console.log(func([1,2,3,4,5,6,7]));