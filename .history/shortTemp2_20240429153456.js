const mathOperations = (a,b,c,d) => {
    const arr = []
    arr.push(a + b, d / 2, c * b, b - b, d - c)
    return arr
}
console.log(mathOperations(15,25,35, 45));