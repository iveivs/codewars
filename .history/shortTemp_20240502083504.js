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
// console.log('a');
// new Promise((resolve, reject) => {
// 	console.log('b');
// 	setTimeout(() => {
// 		console.log('c');
// 		resolve();
// 	}, 0);
// })
//   .then(() => console.log('d'));
// console.log('e');
// setTimeout(() => console.log('f'), 0);
// console.log('g');
const rootElem = document.querySelector()

fetch('https://jsonplaceholder.typicode.com/todos')
    .then( res => res.json())
    .then( data => console.log(data))

