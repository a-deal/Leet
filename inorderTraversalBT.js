/*


Input : < tree > T
Output : < array > of nums N

****** Recursively ******

////// Pseudocode

let results = []
for node in T
    visit left
    results.push(node.val)
    visit right
return results


/////// Code

var inorderTraversal = function(root, results) {
    results = results || [];

    if (root !== null) {
        if (root.left !== null)
            inorderTraversal(root.left, results);

        results.push(root.val);

        if (root.right !== null)
            inorderTraversal(root.right, results);
    }

    return results
};

****** Iteratively ******
stack = []
results = []

// Left subtree
var node = head

while (stack.length > 0)
    while(node.left !== null)
        stack.push(node)
    var temp = stack.pop()
    results.push(temp.val)
    if (temp.right !== null)
        stack.push(node);

*/
var inorderTraversal = function(root) {
    var node, inorder = [], stack = [root];
    if (root !== null) {
        while (stack.length > 0) {
            var currentRoot = stack[stack.length - 1];
            var currentLeft = currentRoot.left
            currentRoot.left = null;

            while(currentLeft !== null) {
                stack.push(currentLeft)
                var temp = currentLeft.left
                currentLeft.left = null;
                currentLeft = temp;
            }
            node = stack.pop();
            inorder.push(node.val);
            if (node.right !== null) {
                stack.push(node.right)
            }
            node.right = null
       }
    }
    return inorder;
};
