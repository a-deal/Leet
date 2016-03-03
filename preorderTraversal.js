/*
Given a binary tree, return the preorder traversal of its nodes' values.

Note: Recursive solution is trivial, could you do it iteratively?


Input: <object> root
Output : <array> preorder

/////////////// PseudoCode ////////////////
function preorderTraversal (root)
  let preorder = [], stack = [root];

  while (root && stack.length)
    var currentRoot = stack.pop();

    preorder.push(currentRoot.val);

    if (currentRoot.right !== null) stack.push(currentRoot.right);

    while (currentRoot.left)
      var left = currentRoot.left
      preorder.push(left.val)
      if (left.right) stack.push(left.right)
      currentRoot.left = null;
      currentRoot = left;

  return preorder;



*/

var preorderTraversal = function(root) {
  var preorder = [], stack = [root];

  while (root && stack.length) {
    var currentRoot = stack.pop();

    preorder.push(currentRoot.val);

    if (currentRoot.right !== null) stack.push(currentRoot.right);

    while (currentRoot.left) {
      var left = currentRoot.left
      preorder.push(left.val)
      if (left.right) stack.push(left.right)
      currentRoot.left = null;
      currentRoot = left;
    }

  }
  return preorder;
};
