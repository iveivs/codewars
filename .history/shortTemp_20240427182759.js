let num = 138
let str = num.toString()
console.log(str);
let newArr = []
for(let i = 0; i < str.length; i++) {
    newArr.push(str[i])
}
let sumOfArr = newArr.reduce((acc, elem) => {
    return acc + elem
}, 0)
console.log(sumOfArr);