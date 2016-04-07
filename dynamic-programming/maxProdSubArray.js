var maxProduct = function(nums) {
  var maxHigh = nums[0], minLow = [0];
  var currentHigh = nums[0], currentLow = nums[0];
  for (var i = 1; i < nums.length; i++) {
    var current = nums[i];
    var low = current * currentHigh;
    var high = current * currentLow;
    currentLow = low < current ?  low : current;
    currentHigh = high > current ? high : current;
    currentLow = high < currentLow ? high : currentLow;
    currentHigh = low > currentHigh ? low : currentHigh;

    maxHigh = currentHigh > maxHigh ? currentHigh : maxHigh;
    maxHigh = currentLow > maxHigh ? currentLow : maxHigh;
    maxLow = currentHigh < minLow ? currentHigh : minLow;
    maxLow = currentLow < minLow ? currentLow : minLow;

  }
  return maxHigh;
};
