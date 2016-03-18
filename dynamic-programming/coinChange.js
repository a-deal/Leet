/*
You are given coins of different denominations and a total amount of money amount.
Write a function to compute the fewest number of coins that you need to make up that amount.
If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:
coins = [1, 2, 5], amount = 11
return 3 (11 = 5 + 5 + 1)

Example 2:
coins = [2], amount = 3
return -1.

Note:
You may assume that you have an infinite number of each kind of coin.

Input  : <int> amount, <array> coins
Output : <int> fewestCoins

Coins = [1,2,3,4,5] , Amount = 11

function coinChange (coins, amount, coinsUsedSoFar, cache) {
  coinsUsedSoFar = coinsUsedSoFar || 0;
  cache = cache || {};

  if (amount < 0) return;
  if (cache[amount]) {
    if (coinsUsedSoFar < cache[amount]) {
        cache[amount] = coinsUsedSoFar;
    } else {
      return;
    }
  }
  if (!cache[amount]) cache[amount] = coinsUsedSoFar;

  for (var i = 0; i < coins.length; i++) {
    coinChange(coins, amount - coins[i], coinsUsedSoFar + 1, cache);
  }
  return cache[0] || -1;
}

*/
"use strict";

function coinChange (coins, amount) {
  var cache = {}
  for (var i = 0; i < coins.length; i++)
    cache[coins[i]] = 1;
  var smallestCoin = coins.sort((a,b) => a - b)[0];
  var min = smallestCoin;
  var coinsUsedSoFar = 1;
  while (min <= amount && !cache[amount]){
    min += smallestCoin;
    coinsUsedSoFar++;
    var oldCache = Object.assign({}, cache);
    for (var sum in oldCache) {
      for (var j = 0; j < coins.length; j++) {
        if (!oldCache[+sum + coins[j]]){
          cache[+sum + coins[j]] = coinsUsedSoFar;
        }
      }
    }
  }
  return cache[amount] || -1;
}

console.log(coinChange([1,3,5], 11)) // 3
console.log(coinChange([2], 3)) // -1
console.log(coinChange([1,2,5], 50)); // 10
console.log(coinChange([1,2,5], 1000)) // 200
console.log(coinChange([243,291,335,209,177,345,114,91,313,331], 7367)); //23
console.log(coinChange([313,230,410,263,338,469,431,118,41,221],4906)); //11
console.log(coinChange([58,92,387,421,194,208,231],7798)); //21
