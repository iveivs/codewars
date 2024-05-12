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

let someNew = new Person('Bob', 'McCourtny')

console.log(someNew.firstname);
someNew.firstname = 'Max'
console.log(someNew.firstname);

