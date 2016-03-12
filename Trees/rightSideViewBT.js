/*
Input  : <object> root
Output : <array> rightSide

       1            <---
     /   \
    2     3         <---
     \     \
      5     4       <---

// [1,3,4]

       1            <---
     /   \
    2      3         <---
     \
      5           <---

// [1,3,6]

rightSideView (<object> root)
    var rightSide = []
    var nodeStack = [];

    while (nodeStack.length)
        var currentLevel = nodeStack.slice();
        var currentValues = [];
        while (currentLevel.length)
            var node = currentLevel.shift();
            if (!node) continue;
            currentValues.push(node.val);
            nodeStack.push(node.left)
            nodeStack.push(node.right)
        rightSide.push(currentValues[currentValues.length - 1]);

    return rightSide;
*/
var rightSideView = function(root, rightSide) {
    var rightSide = []
    var nodeStack = [root];

    while (nodeStack.length) {
        var currentLevel = nodeStack.slice();
        var currentValues = [], nextLevel = [];
        while (currentLevel.length) {
            var node = currentLevel.shift();
            if (!node) continue;
            currentValues.push(node.val);
            nextLevel.push(node.left)
            nextLevel.push(node.right)
        }
        nodeStack = nextLevel;
        if (currentValues.length)
            rightSide.push(currentValues[currentValues.length - 1]);
    }

    return rightSide;
};
