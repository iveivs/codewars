function arrayDiff(a, b) {

    let i = 0
    let j = 0
    while(j < b.length) {

        while(i < a.length){
            console.log('i', a[i], i);
            if(a[i] == b[j]) {
                console.log('finded', a[i]);
                a.splice()
            }
            i++
        }
        console.log('j', b[j], j);
        j++
        i = 0
    }
    return a
}
console.log(arrayDiff([1,2,2,3,4, 4],[2, 4]));