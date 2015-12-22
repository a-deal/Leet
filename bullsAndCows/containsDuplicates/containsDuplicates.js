var containsDuplicate = function(nums) {
    var prev = {};
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] in prev) {
            return true
        } else {
            prev[nums[i]] = i;
        }
    }
    return false;  
};
