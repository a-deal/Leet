var minDepth = function(root) {
    if (root === null) {
        return 0;
    };

    if (root.left !== null) {
        var leftTree = 1 + minDepth(root.left);
    }

    if (root.right !== null) {
        var rightTree = 1 + minDepth(root.right);
    }

    if (!leftTree && !rightTree){
        return 1;
    } else if (!rightTree) {
        return leftTree;
    } else if (!leftTree) {
        return rightTree;
    } else {
        return leftTree < rightTree ? leftTree : rightTree;
    }
};
