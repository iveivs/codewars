class Person {
    #firstname
    constructor(firstname) {
        this.#firstname = firstname
    }
    get firstname() {
        return this.#firstname
    }
    set firstname(someNew) {
        this.#firstname = firstname
    }
}

let someNew = new Person('Bob')
console.log(someNew);

console.log(someNew.firstname);
someNew.firstname = 'Max'
console.log(someNew.firstname);

