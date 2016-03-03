/*
Input: <object> root
Output : <array> preorder

/////////////// PseudoCode ////////////////

function preorderTraversal (root)
  let preorder = '', stack = [root]

  while (stack.length)
    let currentRoot = stack[-1]

    preorder += currentRoot.val

    while currentRoot
      let left = currentRoot.left
      if (left === null)
        preorder += '#'
      else
        preorder += left.val
        stack.push(left)
      currentRoot.left = null;
      currentRoot = left;

    currentRoot = stack.pop()

    while currentRoot
      let right = currentRoot.right
      if (right === null)
        preorder += '#'
      else
        preorder += right.val
        stack.push(right)
      currentRoot.right = null;
      currentRoot = right;
  return preorder


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
