function testTest() {
    console.log('test1');
    for (let i = 0; i < array.length; i++) {
        if(i === 5){
            console.log('out');
            return
        }
        console.log('test1');
    }
    console.log('test3');
}