function spinWords(string){
    let splitedStr = string.split(' ')
    let newStr = ''
    for(elem of splitedStr) {
        if(elem.length > 5) {
            newStr += elem.split('').reverse().join('') ' ' + 
        } else {
            newStr += elem + ' '
        }
    }
    return newStr
}

console.log(spinWords("This is another test"));
console.log(spinWords("This is a test"));