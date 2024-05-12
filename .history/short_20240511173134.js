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
// function high(x){
//     const alphabet = [
//         'a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
//     ]
//     let splitedArr = x.split(' ')
//     // console.log(splitedArr);
//     for(let i = 0; i <splitedArr.length; i++) {

//         for(let j = 0; j <splitedArr[i].length; j++){
//             // console.log(splitedArr[i][j]);
//             let index = alphabet.indexOf(splitedArr[i][j])
            
//         }
//     }
// }

// high('take me tot')

//  = = = = = = = = =

function high(x){
    const alphabet = [
        'a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    ]
    let splitedArr = x.split(' ')
    // console.log(splitedArr);
    for(let i = 0; i < splitedArr.length; i++) {
        console.log(splitedArr[i]);
        let res = splitedArr[i].reduce((acc, elem, index) => acc += +alphabet.indexOf(splitedArr[i][index]))
    }
}

high('take me tot')



