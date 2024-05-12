function testTest() {
    console.log('test1');
    for (let i = 0; i < array.length; i++) {
        if(i === 3){
            console.log('out');
            return
        }
        console.log('test2');
    }
    console.log('test3');
}
testTest()