function arrayDiff(a, b) {

    let i = 0
    let j = 0
    while(j < b.length) {
        while(i < a.length){
            console.log('i', a[i], i);
            if(a[i] !== b[j]) {
                console.log('finded');
            }
            i++
        }
        console.log('j', b[j], j);
        j++
        i 
    }
    return 
}
console.log(arrayDiff([1,2,2,2,3,4],[2, 4]));