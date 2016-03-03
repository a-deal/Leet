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
    var inorder = [], stack = [root];
    while (root && stack.length) {
        var currentRoot = stack[stack.length - 1];

        while(currentRoot) {
            var left = currentRoot.left;
            currentRoot.left = null;
            stack.push(left)
            currentRoot = left;
        }

        currentRoot = stack.pop();
        inorder.push(currentRoot.val);

        if (currentRoot.right !== null) {
            stack.push(currentRoot.right)
            currentRoot.right = null
        }
   }

    return inorder;
};
