class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName,
        this.lastName = lastName
    }
    greet: function (params) {
        console.log('object');
    }
}

let someNew = new Person('Bob', 'McCurtny')
console.log(someNew);

let someNew2 = new Person()
someNew2.age = 34
console.log(someNew2);