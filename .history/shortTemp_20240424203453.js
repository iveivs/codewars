const arr = [1,2,3,3,4,5,5]


// for (let i = 0; i < arr.length; i++) {
//     // const element = arr[i];
//     if(arr[i] === n){
//         console.log('here');
//     }
// }

let arr2 = []
// arr2 = arr.filter((elem) => elem !== n)
// console.log(arr2);

for(index of n) {
    console.log('index = ',index);
    arr2 = arr.filter((elem) => {
        console.log('elem =',elem, ' index =', index);
        console.log('arr = ', arr2);
        return elem !== index
    })
}
console.log(arr2);

