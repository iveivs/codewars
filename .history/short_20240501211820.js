class Person {
    #firstname
    constructor(firstname) {
        this.#firstname = firstname
    }
    get firstname() {
        return this.#firstname
    }
    set firstname(firstName) {
        this.#firstname = firstname
    }
}

let someNew = new Person('Bob')
let someNew = new Person('Bob')
console.log();

console.log(someNew.firstname);
someNew.firstname = 'Max'
console.log(someNew.firstname);

