class Person {
    #firstName
    #lastName
    constructor(firstName, lastName) {
        this.firstName = firstName,
        this.lastName = lastName
    }
    greet() {
        console.log('Hi,', this.firstName);
    }
    by = () => {
        console.log('By,', this.firstName);
    }
}

let someNew = new Person('Bob', 'McCurtny')
console.log(someNew);
