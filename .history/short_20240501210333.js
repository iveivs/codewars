class Person {
    #firstName
    #lastName
    constructor(firstName, lastName) {
        this.#firstName = firstName,
        this.#lastName = lastName
    }
    get firstname() {
        return
    }
    // by = () => {
    //     console.log('By,', this.firstName);
    // }
}

let someNew = new Person('Bob', 'McCurtny')
console.log(someNew);
console.log(someNew.firstName);
