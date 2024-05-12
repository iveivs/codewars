class Person {
    #firstname
    #lastname
    constructor(firstname, lastname) {
        this.#firstname = firstname
        this.#lastname = lastname
    }
    get firstname() {
        return this.#firstname
    }
    set firstname(firstname) {
        this.#firstname = firstname
    }
}

let someNew = new Person('Bob', "Saga")
console.log(someNew);

console.log(someNew.firstname);
someNew.firstname = 'Max'
console.log(someNew.firstname);
console.log(someNew);
console.log(someNew);

// = = = = = = = = = = 
// const array = [2, 1, 3, 8, 7]
// let arr2 = array.sort((a,b) => {
//     console.log('start');
//     console.log('a', a);
//     console.log('b', b);
//     console.log('end');
//     return a - b
// })
// console.log(arr2);



