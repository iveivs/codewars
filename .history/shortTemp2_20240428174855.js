function calc(a, b, operation) {
    switch (operation) {
        case '+':
            a + b
            break;
    
        default:
            break;
    }
}

console.log(calc(1, 2, '+')); // 3
console.log(calc(1, 2, '-')); // -1
console.log(calc(2, 2, '*')); // 4
console.log(calc(4, 2, '/'));