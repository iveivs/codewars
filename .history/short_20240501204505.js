class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName,
        this.lastName = lastName
    }
    greet(params) {
        console.log('Hi,', this.firstName);
    }
}

let someNew = new Person('Bob', 'McCurtny')
console.log(someNew);

someNew.greet()