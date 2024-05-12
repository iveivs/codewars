const arr = [1,2,3,3,4,5,5]

const n = [3, 4]

// for (let i = 0; i < arr.length; i++) {
//     // const element = arr[i];
//     if(arr[i] === n){
//         console.log('here');
//     }
// }

// let arr2 = []
// arr2 = arr.filter((elem) => elem !== n)
// console.log(arr2);





function recArrDif(a, b) {
    
    if(b.length < 2) {
        let arr1 = a.filter((elem) =>  elem !== b[0])
        return arr1
    } else {
        let arr1 = a.filter((elem) =>  elem !== b[0])
        let arr2 = arr1.filter((elem) =>  elem !== b[1])
    }
    
    return 
}
console.log(recArrDif(arr, n));

