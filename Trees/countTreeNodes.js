/*
 Input  : <object> root
 Output : <int> nodeCount

* In a complete binary tree every level, except possibly the last, is completely filled, and
* all nodes in the last level are as far left as possible.
* It can have between 1 and 2h nodes inclusive at the last level h.

countNodes (root, i)
    i = i || 0;
    if (!root) return 0;
    if (heightOf(root.left) === heightOf(root.right))
        return Math.pow(2,i) + countNodes(root.right, i + 1)
    return Math.pow(2,i) + (countNodes(root.left, i + 1) / 2)


heightOf (node)
    if(!node) return 0
    return 1 + heightOf(node.left);

 */
var heightOf = function (node) {
    if (!node) return 0;
    return 1 + heightOf(node.left);
}

var countNodes = function(root, i) {
    i = i || 0;
    if (!root) return 0;
    if (heightOf(root.left) === heightOf(root.right)){
        return Math.pow(2,i) + countNodes(root.right, i + 1)
    }

    return Math.pow(2,i) + countNodes(root.left, i + 1) - (Math.pow(2, heightOf(root.left)) / 2)
};
