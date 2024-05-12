class Person {
    #first
    #lastName
    constructor(firstName, lastName) {
        this.#firstName = firstName,
        this.#lastName = lastName
    }
    get firstName() {
        return this.#firstName
    }
    set firstName(firstName) {
        this.#firstName = firstName
    }
}

let someNew = new Person('Bob', 'McCourtny')

console.log(someNew.firstName);
someNew.firstName()
console.log(someNew.firstName);

