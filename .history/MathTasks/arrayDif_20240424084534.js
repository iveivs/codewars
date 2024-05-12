function arrayDiff(a, b) {

    let i = 0
    let j = 0
    while(j < b.length) {

        // while(i < a.length){
        //     console.log('a=', a[i],'i=', i);
        //     if(a[i] == b[j]) {
        //         console.log('deleted a=', a[i], 'i=', i);
        //         a.splice(a[i], a[i+1])
        //         console.log(a);
        //     }
        //     i++
        // }
        // console.log('j', b[j], j);
        // j++
        // i = 0
        while(i < a.length) {
            if(a.includes(b[j])) {
                console.log('a=', a[i],'i=', i);
                a.splice(a[i], a[i+1])
                console.log(a);
            }
            i++
        }
        j++
        i=0
    }
    return `final`
}
console.log(arrayDiff([1,2,2,3,4, 4],[2, 4]));