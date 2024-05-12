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


const USERS = [
  { id: '001', name: "Алексей", age: 25 },
  { id: '002', name: "Иван", age: 28 },
  { id: '003', name: "Егор", age: 30 },
];

function fetchUser(id) {
  // Ваш код здесь...
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        USERS.map(elem => {
            if(elem.id === id){
                return elem
            }
        })
    }, )
  })
}

async function start() {
  // ...
  const result = await fetchUser('001');
  console.log(result); // { id: '001', name: "Алексей", age: 25 }
  // ...
}

start();



