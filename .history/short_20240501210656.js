class Person {
    #firstName
    #lastName
    constructor(firstName, lastName) {
        this.#firstName = firstName,
        this.#lastName = lastName
    }
    get firstname() {
        return this.#firstName
    }
}

let someNew = new Person('Bob', 'McCourtny')

console.log(someNew);
console.log(someNew.firstName);

someNew.firstname
