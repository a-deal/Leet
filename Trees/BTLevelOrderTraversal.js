/*
 Input : <object> root
 Ouput : <array> results (2d array)

 Given binary tree {3,9,20,#,#,15,7},
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:

[
  [3],
  [9,20],
  [15,7]
]

function levelOrder (root)
    let nodeStack = [root];
    let result = [];

    while (nodeStack.length)
        let currentLevel = nodeStack.slice();
        let currentValues = []
        while (currentLevel.length)
            let node = currentLevel.pop()
            if (!node) continue;
            currentValues.push(node.val);
            nodeStack.push(node.right);
            nodeStack.push(node.left);
        result.push(currentValues)

    return result;

 */
var levelOrder = function(root) {
    var nodeStack = [root], result = [];

    while (nodeStack.length && root) {
        var currentLevel = nodeStack.slice()
        var currentValues = [];
        var nextLevel = [];
        while (currentLevel.length) {
            var node = currentLevel.shift();
            if (!node) continue;
            currentValues.push(node.val);
            nextLevel.push(node.left);
            nextLevel.push(node.right);
        }
        nodeStack = nextLevel;
        if (currentValues.length) result.push(currentValues);
    }

    return result;
};
