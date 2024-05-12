let arr1 = [1,2,3,3,2,3,4]
let arr2 = [3,4]

function arrayDiff(a, b) {
    // Создаем копию первого массива, чтобы не изменять оригинальный массив
    let resArr = a.slice()
    
    // Проходим по каждому элементу второго массива
    b.forEach( function (elem) {
        // Удаляем все вхождения текущего элемента из копии первого массива
        resArr = resArr.filter(item => item !== elem)
    }
    )

    return resArr
}

console.log(arrayDiff(arr1, arr2));

function findMissingLetter(array)
{
  return ' ';
}
