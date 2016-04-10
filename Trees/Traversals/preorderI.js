"use strict";
var Tree = require('leetcode').Tree;

var preorder = (root) => {
  var nodeStack = [root], pre = [];
  while (nodeStack.length) {
    var node = nodeStack.pop();
    if(!node) continue;
    pre.push(node.val);
    nodeStack.push(node.right);
    nodeStack.push(node.left);
  }
  return pre;
}

function assertEquals(expected, actual) {
  if(expected === actual) {
    console.log(expected + " === " + actual + " OK");
  } else {
    console.log("Expected [" + expected + "] but was [" + actual + "]");
  }
}

var t1 = Tree.create([1,2,3,4,5])
var t2 = Tree.create([0])
var t3 = Tree.create([3,2,1])
var t4 = Tree.create([1,5,4,3,7,8,2,10])
assertEquals([1,2,4,5,3], preorder(t1))
assertEquals([0], preorder(t2))
assertEquals([3,2,1], preorder(t3))
assertEquals([1,5,3,10,7,4,8,2], preorder(t4))
