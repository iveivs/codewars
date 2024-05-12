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
function high(x){
    const alphabet = [
        'a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    ]
    let splitedArr = x.split(' ')
    let sumArr = []
    for(let i = 0; i <splitedArr.length; i++) {
        let sumOfone = 0
        for(let j = 0; j <splitedArr[i].length; j++){
            let index = alphabet.indexOf(splitedArr[i][j])
            sumOfone += +index + 1
        }
        sumArr.push(sumOfone)
        
    }
    console.log('sumArr', sumArr);
    const indexOfMaxValue = sumArr.indexOf(Math.max(...sumArr))
    return splitedArr[indexOfMaxValue]
}

// console.log(high("nlkadjzesbbbhwzlraakmlqokytu lkljlrfrbatyntequiwwzjowsaeq umxikhjfsskrzmpuewuirpicihpm dirwjznzsdtkcwligejfcpjkmuvv"));
console.log(high('aaa bb c, '));
//  = = = = = = = = =

// function high(x){
//     const alphabet = [
//         'a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
//     ]
//     let splitedArr = x.split(' ')
//     // console.log(splitedArr);
//     for(let i = 0; i < splitedArr.length; i++) {
//         console.log(splitedArr[i]);
//         // let res = splitedArr[i].reduce((acc, elem, index) => acc += alphabet.indexOf(splitedArr[i][index]))
//         console.log(res);
//     }
// }

// high('take me tot')



