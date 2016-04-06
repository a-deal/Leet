var maxSubArray = function(nums) {
  var cache = [], maxSum = -Infinity;
  for (var i = 0; i < nums.length; i++) {
      var current = nums[i];
      var prev = cache[i - 1] || 0;
      cache[i] = current > (prev + current) ? current : prev + current;
  }
  for (i = 0; i < cache.length; i++) {
      if (cache[i] > maxSum) maxSum = cache[i];
  }
  return maxSum;
};
