/*

Input  : <array> nums
Output : <int> length

// Assign all distinct values to subsequent indices
// Return count of distinct values in given input
*/
var removeDuplicates = function(nums) {
    if (!nums.length) return 0;
    var writeIndex = 1;
    for (var i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[writeIndex - 1]) {
        nums[writeIndex] = nums[i]
        writeIndex++;
      }
    }
    return writeIndex;
};


function assertEquals(expected, actual) {
  if(expected === actual) {
    console.log(expected + " === " + actual + " OK");
  } else {
    console.log("Expected [" + expected + "] but was [" + actual + "]");
  }
}

assertEquals(2, removeDuplicates([1,1,1,2]))
assertEquals(2, removeDuplicates([1,1,2]))
assertEquals(1, removeDuplicates([1,1]))
assertEquals(3, removeDuplicates([1,1,2,3]))
