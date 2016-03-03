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


*/

var inorderTraversal = function(root) {
    var inorder = [], stack = [];
    while (stack.length || root)

      if (root)
        stack.push(root);
        root = root.left;
      else
        temp = stack.pop();
        inorder.push(temp.val);
        root = temp.right


    return inorder;
};
