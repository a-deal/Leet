/*
        6
      /   \
     3     9
    / \   / \
   1   7 8  10

 Input : <object> root
 Output : <boolean>

 *** Inorder traversal of tree

 function isValidBST (<object> root)
    var nodeStack = [root];
    var inorder = [];

    while (nodeStack.length)
        if(root) {
            while(root.left)
        }
 */
var isValidBST = function(root,ceil,floor) {
  if (!root) return true;;
   inorder = inorder || [];
   if (!isValidBST(root.left, inorder))
       return false;
   if (inorder.length && root.val <= inorder[inorder.length - 1])
       return false
   inorder.push(root.val);
   if (!isValidBST(root.right, inorder))
       return false;
   return true;
};
