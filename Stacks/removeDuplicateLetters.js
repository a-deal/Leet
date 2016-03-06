/*
Given a string which contains only lowercase letters, remove duplicate letters
so that every letter appear once and only once. You must make sure your result
is the smallest in lexicographical order among all possible results.

Example:
Given "bcabc"
Return "abc"

Given "cbacdcbc"
Return "acdb"

Input : <string> s
Output : <string> s

function removeDuplicateLetters (s)
  let charStack = []

  for i in s
    let current = s[i];
    if (charStack.length)
      while (current < charStack.peek() && string.slice(i + 1).contains(charStack.peek())
        charStack.pop()
    else
      charStack.push(current)

  return charStack.join('')

*/
"use strict";

var removeDuplicateLetters = (s) => {
  return s.split('').reduce((memo, char, index) => {
    if (memo.unique.length && !(char in memo)) {
      while (char < memo.unique[memo.unique.length - 1] && s.slice(index + 1).includes(memo['unique'][memo['unique'].length - 1]))  {
        var toDelete = memo.unique.pop();
        delete memo[toDelete];
      }
    }
    if (!(memo[char])) {
      memo[char] = char;
      memo.unique.push(char);
    }
    return memo;
  }, { unique : [] })['unique'].join('');
}


console.log(removeDuplicateLetters("cbacdcbc")); // "acdb"
console.log(removeDuplicateLetters("bcabc")); // abc
console.log(removeDuplicateLetters("abacb")); // abc
console.log(removeDuplicateLetters("aefabc")); // abc
