// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"

function solution(string) {
    let splitedString = string.split('')
    let newStr = ''
    for(elem of splitedString){
        if(elem !== elem.toLowerCase()){
            newStr += elem.toLowerCase()
        } else {
            newStr += elem
        }
    }
    return newStr;
}

console.log(solution('someText'));