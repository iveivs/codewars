const mathOperations = (a,b,c,d) => {
    const answersArr = []
    answersArr.push(a + b, d / 2, c * b, b - b, d - c)
    return answersArr
}

const [w,x,y,z] = mathOperations(15,25,35,45)
