const mathOperations = (a,b,c,d) => {
    const answersArr = []
    const compareArr = []
    answersArr.push(a + b, d / 2, c * b, b - b, d - c)
    compareArr.push(a < b,  a < d, a > b, c >= c, b === d, d === d, c !== a)
    return {
        mathAnswers: answersArr,
        compareAnswers: compareArr,
    }
}

const { mathAnswers, compareAnswers } = mathOperations(15,25,35,45)
const [ v, w, x, y , z ] = [...mathAnswers]
const [ k, l, q, r, s, t, u ] = [...mathAnswers]

console.log(mathAnswers);
console.log(compareAnswers);
console.log(v, w, x, y , z);
// console.log(x);
// const compareOperations = (a,b,c,d) => {
//     const answersArr = []
//     answersArr.push(a + b, d / 2, c * b, b - b, d - c)
//     return answersArr
// }
