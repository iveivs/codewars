const mathOperations = (a,b,c,d) => {
    const answersArr = []
    const compareArr = []
    answersArr.push(a + b, d / 2, c * b, b - b, d - c)
    compareArr.push(a < b, )
    return {
        mathAnswers: answersArr
    }
}
// console.log( mathOperations(15,25,35,45));

const {mathAnswers} = mathOperations(15,25,35,45)

console.log(mathAnswers);
// const compareOperations = (a,b,c,d) => {
//     const answersArr = []
//     answersArr.push(a + b, d / 2, c * b, b - b, d - c)
//     return answersArr
// }
