/*
In Byteland they have a very strange monetary system.

Each Bytelandian gold coin has an integer number written on it.
A coin n can be exchanged in a bank into three coins: n/2, n/3 and n/4.
But these numbers are all rounded down (the banks have to make a profit).

You can also sell Bytelandian coins for American dollars.
The exchange rate is 1:1. But you can not buy Bytelandian coins.

You have one gold coin. What is the maximum amount of American dollars you can get for it?

Input

The input will contain several test cases (not more than 10).
Each testcase is a single line with a number n, 0 <= n <= 1 000 000 000.
It is the number written on your coin.

Output

For each test case output a single line,
containing the maximum amount of American dollars you can make.

Input  : <int> coin
Output : <int> maxValue

                 21
       / -------  | -------  \
      10          7           5

function findMaxValue (coin) {
  if (coin < 2) return coin;

  var halfExchange = findMaxValue(Math.floor(coin/2));
  var half = Math.floor(coin/2) > halfExchange ? Math.floor(coin/2) : halfExchange;

  var thirdExchange = findMaxValue(Math.floor(coin/3))
  var third = thirdExchange > Math.floor(coin/3) ? thirdExchange : Math.floor(coin/3);

  var quarterExchange = findMaxValue(Math.floor(coin/4));
  var quarter = quarterExchange > Math.floor(coin/4) ? quarterExchange : Math.floor(coin/4);

  var exchange = half + third + quarter;

  return exchange > coin ? exchange : coin;
}

*/
var cache = {};
function findMaxValue (coin) {
  if (coin < 2) return coin;

  var halfExchange = cache[Math.floor(coin/2)] || findMaxValue(Math.floor(coin/2));
  var half = Math.floor(coin/2) > halfExchange ? Math.floor(coin/2) : halfExchange;

  var thirdExchange = cache[Math.floor(coin/3)] || findMaxValue(Math.floor(coin/3))
  var third = thirdExchange > Math.floor(coin/3) ? thirdExchange : Math.floor(coin/3);

  var quarterExchange = cache[Math.floor(coin/4)] || findMaxValue(Math.floor(coin/4));
  var quarter = quarterExchange > Math.floor(coin/4) ? quarterExchange : Math.floor(coin/4);

  var exchange = half + third + quarter;

  cache[coin] = exchange > coin ? exchange : coin;
  return cache[coin];
}

console.log(findMaxValue(12)); // 13;
console.log(findMaxValue(15)); // 15;
console.log(findMaxValue(21)); // 22;
console.log(findMaxValue(1000)); // 1370
console.log(findMaxValue(100000000)); // 364,906,343
console.log(findMaxValue(1000000000)); // 4,243,218,150
