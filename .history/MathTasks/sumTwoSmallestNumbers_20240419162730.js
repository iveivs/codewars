function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a, b) => a - b);
    return numbers[0] + numbers
}

console.log(sumTwoSmallestNumbers([34, 26, 356, 12, 9, 5, 10]));