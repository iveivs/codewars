let prices = [100, 200, 300];

for (let i = 0; i < prices.length; i++) {
    prices[i] = prices[i] - (prices[i] * .1)
}

let pricesArr = [100, 200, 300];
const anotherPricecArr = prices.map(elem => elem = elem - (elem * .1))
console.log(prices);
console.log(anotherPricecArr);