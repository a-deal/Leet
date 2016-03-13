var sortedArrayToBST = function(nums) {
  if (nums.length) {
      var middle = Math.floor((nums.length - 1)/2)
      var root = new TreeNode(nums[middle])
      root.left = sortedArrayToBST(nums.slice(0,middle))
      root.right = sortedArrayToBST(nums.slice(middle + 1))
      return root;
  }
  return null;
};
