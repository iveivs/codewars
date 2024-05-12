function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a, b) => a - b);
    return numbers
}

console.log(sumTwoSmallestNumbers());