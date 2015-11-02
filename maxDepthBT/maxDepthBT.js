var maxDepth = function(root) {
    var longest = 0;

    if (root === null) {
            return 0;
    }

    function findDepth (node, counter) {
        if (node.right !== null) {
            findDepth(node.right, counter + 1)
        }
        if (node.left !== null) {
            findDepth(node.left, counter + 1)
        }
        if (counter > longest){
            longest = counter;
        }
    }

    findDepth(root, 1)

    return longest;
};
