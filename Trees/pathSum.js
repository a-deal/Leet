/*
Input  : <object> root, <int> sum
Output : <boolean>

             5
            / \
           4   8
          /   / \
         11  13  4
        /  \      \
       7    2      1

function hasPathSum (root, sum)
   if (root === null && sum === 0)
       return true;
   if (root === null)
       return false;

   left = hasPathSum(root.left, sum - root.val)
   right = hasPathSum(root.right, sum - root.val)

   return left || right;

*/
var hasPathSum = function(root, sum) {
    if (root === null)
       return false;
   if (root.left === null && root.right === null && !(sum - root.val))
       return true;

   var left = hasPathSum(root.left, sum - root.val)
   var right = hasPathSum(root.right, sum - root.val)

   return left || right;
};
