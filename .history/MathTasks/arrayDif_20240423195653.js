function arrayDiff(a, b) {
    // for(let i = 0; i < a.length; i++){
    //     // console.log(a[i]);
    //     if(a[i] !== b[i]) {

    //     }

    // }
    let i = 0
    let j = 0
    let newArr = []
    while(j < b.length) {
        while(i < a.length){
            console.log('j', a[j]);
            if(a[i] !== b[j]) {
                newArr.push(a[i])
            }
            i++
        }
        console.log('j', b[j]);
        j++
    }
    
    return newArr
}
// arrayDiff([1,2],[1]) 
console.log(arrayDiff([1,2,2,2,3,4],[2, 4]));