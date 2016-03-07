/*
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie,
from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree {3,9,20,#,#,15,7},
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
confused what "{1,#,2,3}" means? > read more on how binary tree is serialized on OJ.

      4
    /   \
   3     5
  / \   / \
 6   7 8   9

Input: <object> root
Output: <array> 2d

4
35
6789

function zigzagLevelOrder (root)
  nodeStack = [root];
  result = [];
  level = 0;

  while (nodeStack.length)
    let currentLevel = []

    for node in nodeStack // left to right
      currentLevel.push(node.val)
      nodeStack.push(node.left)
      nodeStack.push(node.right)
      delete nodeStack[node];

    level++;
    result.push(currentLevel);

  return result;

*/

function zigzagLevelOrder (root) {
  nodeStack = [root];
  result = [];
  level = 0;

  while (nodeStack.length && root) {
    var currentValues = [];
    var currentLevel = nodeStack.slice();
    var nextLevel = []
    var length = nodeStack.length, node;
    while(currentLevel.length) {
        node = currentLevel.pop()
        currentValues.push(node.val);
        if (level % 2 === 0) {
            if (node.left) nextLevel.push(node.left);
            if (node.right) nextLevel.push(node.right);
        } else {
            if (node.right) nextLevel.push(node.right);
            if (node.left) nextLevel.push(node.left);
        }
    }
    nodeStack = nextLevel;
    level++;
    result.push(currentValues);
  }

  return result;
}
