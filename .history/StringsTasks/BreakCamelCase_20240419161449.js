// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"

function solution(string) {
    let splitedString = string.split('')
    let newStr = ''
    for(elem of splitedString){
        if(elem !== elem.toLowerCase()){
            console.log(elem);
            newStr += elem.toLowerCase()
        } el
    }
    // console.log(splitedString);
    return splitedString;
}

solution('SomeText')