const happyDog = Promise.resolve('🐶')
happyDog.then(function (dog) {
  console.log(dog) // 🐶
})

let pricesArr = [100, 200, 300];
const anotherPricecArr = pricesArr.map(elem => elem * 0.9)
clg