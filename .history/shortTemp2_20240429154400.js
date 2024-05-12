const numArr = [15,25,35,45]
const mathOperations = (a,b,c,d, array) => {
    const answersArr
    array.push(a + b, d / 2, c * b, b - b, d - c)
    return array
}
console.log(mathOperations());

const [w,x,y,z] = mathOperations(15,25,35,45)
console.log(w, x);