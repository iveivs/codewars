const arr = [1,2,3,3,4,5,5]

const n = [3, 5]

for (let i = 0; i < arr.length; i++) {
    // const element = arr[i];
    if(arr[i] === n){
        console.log('here');
    }
    
}

const arr2 = []
 arr.filter((elem) => elem !== n)
console.log(arr2);