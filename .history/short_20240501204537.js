class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName,
        this.lastName = lastName
    }
    greet(params) {
        console.log('Hi,', this.firstName);
    }
    by
}

let someNew = new Person('Bob', 'McCurtny')
console.log(someNew);

someNew.greet()