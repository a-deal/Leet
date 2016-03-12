/*
        1
       / \
      2   5
     / \   \
    3   4   6

  1
   \
    2
     \
      3
       \
        4
         \
          5
           \
            6


Input  : <object> root
Output : N/A

**Preorder Traversal

flatten (root)
   var nodeStack = [root.right, root.left];
   while (nodeStack.length)
       var node = nodeStack.pop()
       if (!node) continue;
       nodeStack.push(node.right);
       nodeStack.push(node.left);
       root.left = null;
       root.right = node;
       root = root.right;

*/
var flatten = function(root, list) {
   if (root){
       var nodeStack = [root.right, root.left];
       while (nodeStack.length) {
           var node = nodeStack.pop()
           if (!node) continue;
           root.left = null;
           root.right = node;
           nodeStack.push(node.right);
           nodeStack.push(node.left);
           root = root.right;
       }
   }
};
