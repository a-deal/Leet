var Tree = require('leetcode').Tree;

var postorder = (root) => {
  var nodeStack = [root], post = [];
  while(nodeStack.length) {
    var node = nodeStack.pop()
    if (!node) continue;
    post.unshift(node.val);
    nodeStack.push(node.left);
    nodeStack.push(node.right);
  }
  return post;
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
assertEquals([4,5,2,3,1], postorder(t1))
assertEquals([0], postorder(t2))
assertEquals([2,1,3], postorder(t3))
assertEquals([10,3,7,5,8,2,4,1], postorder(t4))
