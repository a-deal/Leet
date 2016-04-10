/*

Input  : <object> root
Output : <array> orderTraversal

*/
"use strict";

const Tree = require('leetcode').Tree;

const levelOrderTraversal = function (root) {
  let traversalQueue = [root], orderQueue = [];
  while (traversalQueue.length) {
    let oldQueue = traversalQueue.slice();
    let nextLevel = [], currentLevel = [];
    while (oldQueue.length) {
      var node = oldQueue.shift();
      if (!node) continue;
      currentLevel.push(node.val)
      nextLevel.push(node.left)
      nextLevel.push(node.right)
    }
    if (currentLevel.length) orderQueue.push(currentLevel);
    traversalQueue = nextLevel
  }
  return orderQueue;
}

const t1 = Tree.create([1,2,3,4,5,6,7])

function assertEquals(expected, actual) {
  if(expected === actual) {
    console.log(expected + " === " + actual + " OK");
  } else {
    console.log("Expected [" + expected + "] but was [" + actual + "]");
  }
}

const answer1 = [[1],[2,3],[4,5,6,7]]
assertEquals(answer1, levelOrderTraversal(t1));
