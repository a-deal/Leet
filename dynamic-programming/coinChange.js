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

coins = [1,2,5], amount = 11;

coinChange(11) => Math.min(11 - 1, 11 - 2, 11 - 5)
-------------------
coinChange(10) => Math.min(10 - 1, 10 - 2, 10 - 5)
coinChange(9) => Math.min(9 - 1, 9 - 2, 9 - 5)
coinChange(6) => Math.min(6 - 1, 6 - 2, 6 - 5)
-------------------
coinChange(9) => Math.min(9 - 1, 9 - 2, 9 - 5)
coinChange(8) => Math.min(8 - 1, 8 - 2, 8 - 5)
coinChange(5) => Math.min(5 - 1, 5 - 2, 5 - 5)
coinChange(8) => Math.min(8 - 1, 8 - 2, 8 - 5)
coinChange(7) => Math.min(7 - 1, 7 - 2, 7 - 5)
coinChange(4) => Math.min(4 - 1, 4 - 2, 4 - 5)
coinChange(5) => Math.min(5 - 1, 5 - 2, 5 - 5)
coinChange(4) => Math.min(4 - 1, 4 - 2, 4 - 5)
coinChange(1) => Math.min(1 - 1, 1 - 2, 1 - 5)
         0 1 2 3 4 5 6 7 8 9 10 11
[2,5]   [0,1,1,2,2,1,2,2,3,3,2,3]

*/
"use strict";
function coinChange (coins, amount) {
  if(!amount) return 0;
  var cache = [0]
  for (var i = 1; i <= amount; i++) {
    findMin(i, coins, cache);
  }
  return cache[cache.length - 1] === 0 ? -1 : cache[cache.length - 1];
}

function findMin (amount, coins, cache) {
  var min = Infinity;
  for (var j = 0; j < coins.length; j++) {
    var remainder = amount - coins[j];
    if (cache[remainder] === 0 && remainder > 0) continue;
    if (cache[remainder] < min && remainder >= 0) min = 1 + cache[remainder];
  }
  cache[amount] = min === Infinity ? 0 : min;
}

function assertEquals(expected, actual) {
  if(expected === actual) {
    console.log(expected + " === " + actual + " OK");
  } else {
    console.log("Expected [" + expected + "] but was [" + actual + "]");
  }
}
assertEquals(0, coinChange([1],0))
assertEquals(-1, coinChange([2], 3)) // -1
assertEquals(10, coinChange([1,2,5], 50)); // 10
assertEquals(200, coinChange([1,2,5], 1000)) // 200
assertEquals(23, coinChange([243,291,335,209,177,345,114,91,313,331], 7367)); //23
assertEquals(11, coinChange([313,230,410,263,338,469,431,118,41,221],4906)); //11
assertEquals(21, coinChange([58,92,387,421,194,208,231],7798)); //21
