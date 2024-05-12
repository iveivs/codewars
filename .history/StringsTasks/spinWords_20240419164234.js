function spinWords(string){
    let splitedStr = string.split(' ')
    let newStr = ''
    //TODO Have fun :)
    for(elem of splitedStr) {
        if(elem.length > 5) {
            elem.split('').reverse().join('')
        }
    }
    return splitedStr
}

console.log(spinWords("This is another test"));