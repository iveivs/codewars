// const arr = [1,2,3,3,4,5,5]

// const n = []
// - - - - -

// const arr = [6,9,-20,7,5,-4,-12,-17,6,19,-3,7,-4,17,12,-16] 
// const n =   [6,9,-20,7,5,-4,-12,-17,6,19,-3,7,-4,17,12]

// - -  работает только для 2-х аргументов- - -
// function recArrDif(a, b) {
//     if (b.length == 0) {
//         return a
//     }
//     if(b.length < 2) {
//         let arr1 = a.filter((elem) =>  elem !== b[0])
//         return arr1
//     } else {
//         let arr1 = a.filter((elem) =>  elem !== b[0])
//         let arr2 = arr1.filter((elem) =>  elem !== b[1])
//         return arr2
//     }
// }
// console.log(recArrDif(arr, n));
// - - - - -

// let arr1 = [1,2,3,3,2,3,4]
// let arr2 = [3,4]

// for (let i = 0; i < arr2.length; i++) {
//     console.log('arr2', arr2[i]);
//     for (let j = 0; j < arr1.length; j++) {
//         console.log('\t', 'arr1', arr1[j]);

//         if(arr1[j] === arr2[i]){
//             console.log('finded, its=', arr1[j], 'index =', j);

//             arr1.splice(j, 1)
//         }
//     }
    
// }
// console.log(arr1);
function removeDuplicates(arr1, arr2) {
    // Проходим по каждому элементу второго массива
    arr2.forEach(function(element) {
        // Ищем индекс текущего элемента в первом массиве
        var index = arr1.indexOf(element);
        // Если элемент найден в первом массиве, удаляем его
        if (index !== -1) {
            arr1.splice(index, 1);
        }
    });
    return arr1;
}

// Пример использования функции
var array1 = [1, 2, 3, 4, 5];
var array2 = [3, 4, 6];
var resultArray = removeDuplicates(array1, array2);
console.log(resultArray); // Выведет: [1, 2, 5]
