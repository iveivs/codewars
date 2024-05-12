// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"

function solution(string) {
    let splitedString = string.split('')
    clg
    for(elem of splitedString){
        if(elem !== elem.toLowerCase()){
            console.log(elem);
        }
    }
    // console.log(splitedString);
    return splitedString;
}

solution('SomeText')