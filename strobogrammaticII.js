/*
A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).
Find all strobogrammatic numbers that are of length = n.
For example,
Given n = 2, return ["11","69","88","96"]

Input  : <int> n
Output : <array> result

validDigits are [0,1,6,8,9]

where n is the length (# of digits), search for strobogrammatic numbers between 10^n and 10^n+1 exclusive

strobogrammatic numbers are those numbers consisting only of strobogrammatic digits (read the same both rightside up and upside down)

stroboNums ={
  0 : 0,
  1 : 1,
  6 : 9,
  8 : 8,
  9 : 6
}

function findStrobos ( n, results, current )
  result = result || [];
  current = current || '';

  if (tooGreat(+current)) {
    return;
  } else if (isGreatEnough(+current) && isStrobo(current))
    result.push(+current)
  } else {

    for (let num in stroboNums)
      findStrobos(n, result, current + stroboNums[num]);

  return results;



function isGreatEnough (num)
  return current > 10^n;

function tooGreat (num)
  return current > 10^(n + 1);

function isStrobo (num)
  let strobo = '';
  for char in num
    strobo += stroboNums[char];
  return strobo === num;
*/
"use strict";

let stroboNums = {
  0 : 0,
  1 : 1,
  6 : 9,
  8 : 8,
  9 : 6
}

let isGreatEnough = (num, exp) => {
  return num > Math.pow(10, exp - 1);
}

let tooGreat = (num, exp) => {
  return num > Math.pow(10, exp);
}

let isStrobo = (num) => {
  let strobo = '';
  for (let i = 0; i < num.length; i++) {
    strobo += stroboNums[num[i]];
  }
  return strobo.split('').reverse().join('') === num;
}

let findStrobos = ( n, results, current ) => {
  results = results || [], current = current || '';
  if (tooGreat(+current, n)) {
    return;
  }

  if (isGreatEnough(+current, n) && isStrobo(current)) {
    results.push(current)
  } else {
    for (let num in stroboNums) {
      if (current.length < 1 && +num === 0) {
        continue;
      }
      findStrobos(n, results, current + stroboNums[num]);
    }
  }
  return results;
}

console.log(findStrobos(2)) // ["11","69","88","96"]
console.log(findStrobos(3)) // [101, 111, 181, 609, 619, 689, 808, 818, 888, 906, 916, 986]
console.log(findStrobos(4)) // [1001, 1111, 1691, 1881, 1961, 6009, 6119, 6699, 6889, 6969, 8008, 8118, 8698, 8888, 8968, 9006, 9116, 9696, 9886, 9966,]
