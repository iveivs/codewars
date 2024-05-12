// class Person {
//     #firstname
//     constructor(firstname) {
//         this.#firstname = firstname
//     }
//     get firstname() {
//         return this.#firstname
//     }
//     set firstname(firstname) {
//         this.#firstname = firstname
//     }
// }

// let someNew = new Person('Bob')
// console.log(someNew);

// console.log(someNew.firstname);
// someNew.firstname = 'Max'
// console.log(someNew.firstname);

// = = = = = = = = = = 
// function digitalRoot(num) {
//     let strOfNum = num.toString()
//     if(strOfNum.length >= 2) {
//         console.log('test');
//     }
//     return strOfNum
// }
// console.log(digitalRoot(28));

function digitalRoot(num) {
    let res
    while (num >= 10) {
        let str = num.toString()
        let newArr = []
        for (let i = 0; i < str.length; i++) {
            newArr.push(+str[i])
        }
        let sumOfArr = newArr.reduce((acc, elem) => {
            return acc + elem
        })
        num = sumOfArr
        console.log(num);
        res = num
    }

    return res
}
console.log(digitalRoot(132189));
