function high(x){
    const alphabet = [
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    ]
    let splitedArr = x.split(' ')
    let sumArr = []
    for(let i = 0; i < splitedArr.length; i++) {
        let sumOfone = 0
        for(let j = 0; j < splitedArr[i].length; j++){
            let index = alphabet.indexOf(splitedArr[i][j])
            sumOfone += +index + 1
        }
        sumArr.push(sumOfone)
        
    }
    console.log("sumArr" , sumArr);
    const indexOfMaxValue = sumArr.indexOf(Math.max(...sumArr))
    return splitedArr[indexOfMaxValue]
}

console.log(high('test some words'));