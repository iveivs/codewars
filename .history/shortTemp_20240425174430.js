function testTest() {
    console.log('test1');
    for (let i = 0; i < 10; i++) {
        if(i === 3){
            console.log('out');
            break
        }
        console.log('test2', 'i =', i);
    }
    console.log('test3');
    return 'str'
}
console.log(testTest());


const arr = [1, 3, 'd']