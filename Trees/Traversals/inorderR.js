"use strict";
var Tree = require('leetcode').Tree;

var inorder = (root, ino = []) => {
  if (!root) return ino;
  inorder(root.left, ino)
  ino.push(root.val);
  inorder(root.right, ino)
  return ino;
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
assertEquals([4,2,5,1,3], inorder(t1))
assertEquals([0], inorder(t2))
assertEquals([2,3,1], inorder(t3))
assertEquals([10,3,5,7,1,8,4,2], inorder(t4))
