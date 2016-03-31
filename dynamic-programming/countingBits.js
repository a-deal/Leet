/*

Given a non negative integer number num.
For every numbers i in the range 0 ≤ i ≤ num calculate
the number of 1's in their binary representation and return them as an array.

0 '0'
1 '1'
2 '10'
3 '11'
4 '100'
5 '101'
6 '110'
7 '111'
8 '1000'
9 '1001'
10 '1010'
11 '1011'
12 '1100'
13 '1101'
14 '1110'
15 '1111'
16 '10000'
17 '10001'
18 '10010'
19 '10011'
20 '10100'


*/
var countBits = function(num) {
    var cache = [0];
    for (var i = 1; i <= num; i++) {
      if (i % 2 === 0) cache[i] = cache[i/2];
      if (i % 2 === 1) cache[i] = cache[Math.floor(i / 2)] + 1;
    }
    return cache;
};

function assertEquals(expected, actual) {
  if(expected === actual) {
    console.log(expected + " === " + actual + " OK");
  } else {
    console.log("Expected [" + expected + "] but was [" + actual + "]");
  }
}

assertEquals([0], countBits(0))
assertEquals([0,1], countBits(1))
assertEquals([0,1,1,2,1,2], countBits(5));
assertEquals([0,1,1,2,1,2,2,3,1,2,2], countBits(10));
assertEquals([0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2], countBits(20))
