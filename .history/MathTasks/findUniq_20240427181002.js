function findUniq(arr) {
    let i = 0
    let oftenVar 
    while(i < arr.length){
        if(arr[i] == arr[i + 1]) {
            oftenVar = arr[i]
            break
        }
        if(arr[i] == arr[i + 2]) {
            oftenVar = arr[i]
            break
        }
        i++;
    }
    const uniqueNumsSet = new Set(arr)
    const uniqArr = Array.from(uniqueNumsSet)
    let result = oftenVar == uniqArr[0] ? uniqArr[1] : uniqArr[0]
    return result
}



