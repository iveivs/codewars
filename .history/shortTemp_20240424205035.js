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
// function tempFunc() {
    let arr2
// }
for(let i = 0; i < n.length; i++) {
    console.log('index = ',i);
     arr2 = arr.filter((elem) => elem !== n[i])
    
}
console.log(arr2);

// function recArrDif(a, b) {
//     let arr1 = b.filter(() => )
// }

