const mathOperations = (a,b,c,d) => {
    const answersArr = []
    answersArr.push(a + b, d / 2, c * b, b - b, d - c)
    return {
        mathAnswers: answersArr
    }
}
 mathOperations(15,25,35,45)

// const [w,x,y,z] = mathOperations(15,25,35,45)
// console.log(x);
// const compareOperations = (a,b,c,d) => {
//     const answersArr = []
//     answersArr.push(a + b, d / 2, c * b, b - b, d - c)
//     return answersArr
// }
