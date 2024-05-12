// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"

function solution(string) {
    let splitedString = string.split('')
    for(elem of splitedString){
        if(elem == elem.toLowerCace()){
            console.log(elem);
        }
    }
    // console.log(splitedString);
    return splitedString;
}

solution('SomeText')