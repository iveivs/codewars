const happyDog = Promise.resolve('🐶')
happyDog.then(function (dog) {
  console.log(dog) // 🐶
})