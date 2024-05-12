function spinWords(string){
    let splitedStr = string.split(' ')
    // let newStr = ''
    let newArr = []
    for(elem of splitedStr) {
        if(elem.length > 5) {
            // newStr += elem.split('').reverse().join('') + ' '
            newArr.push(elem.split('').reverse().join(''))
        } else {
            // newStr += elem + ' '
            newArr.push(elem)
        }
    }
    return newArr.join()
}

console.log(spinWords("This is another test"));
console.log(spinWords("This is a test"));