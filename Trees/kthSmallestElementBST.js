/*
 Input  : <object> root, <int> k
 Output : <int> kth


           6
        /    \
       3       9
      / \    /  \
     1   4  7    10

 Inorder Traversal of Tree => count from lowest

 kthSmallest = function (root, k)
    var nodeStack = [root];
    var inorder = [];

    while (nodeStack.length && root)
        if (root) {
            while(root)
                nodeStack.push(root.left);
                root = root.left;
        } else {
            root = nodeStack.pop()
            if (!root) continue;
            inorder.push(root.val)
            nodeStack.push(root.right)
            root = root.right;
        }

    return inorder[k] ? inorder[k] : null;
 */
var kthSmallest = function(root, k) {
    var nodeStack = [root];
    var inorder = [];
    while (nodeStack.length) {
        if (root) {
            while(root) {
                nodeStack.push(root.left);
                root = root.left;
            }
        } else {
            root = nodeStack.pop()
            if (!root) continue;
            inorder.push(root.val)
            nodeStack.push(root.right)
            root = root.right;
        }
    }
    return inorder[k - 1] ? inorder[k - 1] : 0;
};
