var levelOrderBottom = function(root) {
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
        if (currentValues.length) result.unshift(currentValues);
    }

    return result;
};
