// class Person {
//     #firstname
//     constructor(firstname) {
//         this.#firstname = firstname
//     }
//     get firstname() {
//         return this.#firstname
//     }
//     set firstname(firstname) {
//         this.#firstname = firstname
//     }
// }

// let someNew = new Person('Bob')
// console.log(someNew);

// console.log(someNew.firstname);
// someNew.firstname = 'Max'
// console.log(someNew.firstname);
let array = [17, 12, 54, 90, 10, 2, 25, 93, 83, 15];

let min = array[0]
let max = array[0]
for (let i = 1; i < array.length; i++) {
    if(array[i] < min) {
        min = array[i]
        continue
    } else if(array[i] > max) {
        max = array[i]
    }
}
console.log(min);
console.log(max);
