/*
 Input  : <object> root
 Output : <int> root

 DFS to find all paths to each leaf
    - Add each root value until leaf is reached

     1
   /   \
  2     3
 / \   / \
4   5 6   7

function sumNumbers (root, num, nums)
    num = num || '', nums = nums || [];
    if (!root)
        return;
    if (!root.left && !root.right)
        nums.push(Number(num))
        return;

    left = sumNumbers(root.left, num + root.val, nums)
    right = sumNumbers(root.right, num + root.val, nums)

    return nums.reduce((memo, num) => {
        memo += num;
        return memo;
    }, 0)

 */
var sumNumbers = function(root, num, nums) {
    num = num || '', nums = nums || [];
    if (!root)
        return 0;
    if (!root.left && !root.right) {
        nums.push(Number(num + root.val))
    }

    sumNumbers(root.left, num + root.val, nums)
    sumNumbers(root.right, num + root.val, nums)

    return nums.reduce((memo, num) => {
        memo += num;
        return memo;
    }, 0)
};
