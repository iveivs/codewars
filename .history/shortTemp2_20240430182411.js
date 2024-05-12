const happyDog = Promise.resolve('🐶')
happyDog.then(function (dog) {
  console.log(dog) // 🐶
})

const anotherPricecArr = pricesArr.map(elem => elem * 0.9)