

// let pricesArr = [100, 200, 300];
// const anotherPricecArr = pricesArr.map(elem => elem * 0.9)
// console.log(anotherPricecArr);

function generateNumberString(n) {
    // Базовый случай: если n равно 1, возвращаем строку '1'
    if (n === 1) {
        return '1';
    } else {
        // Рекурсивный случай: генерируем строку для n-1 и добавляем n в конец, разделяя пробелом
        return generateNumberString(n - 1) + ' ' + n;
    }
}

// Пример использования
// console.log(generateNumberString(5)); 

function sumNum(num) {
    let str = num.toString()
    let result = 
    // let newArr = []
    // for(let i = 0; i < str.length; i++) {
    //         newArr.push(+str[i])
    //     }
    // if(newArr.length === 1) {

    // }
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
        
    }
}
sumNum(745)

