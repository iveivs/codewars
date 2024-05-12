const mathOperations = (a,b,c,d) => {
    const answersArr = []
    const compareArr = []
    answersArr.push(a + b, d / 2, c * b, b - b, d - c)
    compareArr.push(a < b,  a < d, a > b, c >= c, b === d)
    return {
        mathAnswers: answersArr,
        compareAnswers: compareArr,
    }
}

const {mathAnswers} = mathOperations(15,25,35,45)
const [v, w, x, y , z] = [...mathAnswers]

console.log(mathAnswers);
console.log(x);
// const compareOperations = (a,b,c,d) => {
//     const answersArr = []
//     answersArr.push(a + b, d / 2, c * b, b - b, d - c)
//     return answersArr
// }
