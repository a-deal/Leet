/*
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j),
inclusive.

Example:
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
Note:
You may assume that the array does not change.
There are many calls to sumRange function.

Input: <array> nums (integers)
Output: <object>

[2,4,6,8,10]

1,3 => cache[4] - cache[3 - 1];

0 => 2 : 2
1 => 4 : 6
2 => 6 : 12
3 => 8 : 20
4 => 10 : 30

[2,6,12,20,30]


*/

var NumArray = function(nums) {
    this.cache = nums.reduce((memo, curr, i) => {
      if (i > 0 ) {
        memo[i] = curr + memo[i - 1];
      } else {
        memo[i] = curr;
      }
      return memo;
    }, [])
};

NumArray.prototype.sumRange = function(i, j) {
    if (i > 0) {
      return this.cache[j] - this.cache[i - 1];
    } else {
      return this.cache[j];
    }
};

var arr = new NumArray([1,2,3,4,5]);
console.log(arr.sumRange(0,2)); // 6
console.log(arr.sumRange(3,4)); // 9
console.log(arr.sumRange(1,3)); // 9
