class Person {
    #firstname
    #lastName
    constructor(firstname, lastName) {
        this.#firstname = firstname,
        this.#lastName = lastName
    }
    get firstname() {
        return this.#firstname
    }
    set firstname(firstName) {
        this.#firstname = firstname
    }
}

let someNew = new Person('Bob', 'McCourtny')

console.log(someNew.firstName);
someNew.firstName()
console.log(someNew.firstName);

