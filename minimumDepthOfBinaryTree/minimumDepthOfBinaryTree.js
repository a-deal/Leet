var minDepth = function(root) {
    var shortest;

    if (root === null) return 0;

    function findDepth (node, height) {
        if (node.right === null && node.left === null) {
            if (shortest === undefined || height < shortest) {
                shortest = height;
            }
        }

        if (node.right !== null) {
            findDepth(node.right, height + 1)
        }

        if (node.left !== null) {
            findDepth(node.left, height + 1)
        }
    }
    findDepth(root, 1);

    return shortest;

};
