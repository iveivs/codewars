class Person {
    #firstName
    #lastName
    constructor(firstName, lastName) {
        this.#firstName = firstName,
        this.#lastName = lastName
    }
    get firstName() {
        return this.#firstName
    }
    set firstName(firstName) {
        this.
    }
}

let someNew = new Person('Bob', 'McCourtny')

console.log(someNew.firstName);

