// getPasswords() — асинхронная функция, которая возвращает промис
getPasswords().then(
    function (result) {
      // что-то делаем с результатом операции
      console.log('Все пароли:' + result)
    },
    function (err) {
      // обрабатываем ошибку
      console.error(err.message)
    }
  )
  