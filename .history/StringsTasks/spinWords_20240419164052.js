function spinWords(string){
    let splitedStr = string.split(' ')
    let new
    //TODO Have fun :)
    for(elem of splitedStr) {
        if(elem.length > 5) {
            console.log(elem);
        }
    }
    return splitedStr
}

console.log(spinWords("This is another test"));