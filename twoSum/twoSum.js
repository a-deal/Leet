var twoSum = function (nums, target) {
    var hash = {};
    var length = nums.length;
    var i = 0;
    var needed;

    for (i; i < nums.length; i++) {
        needed = target - nums[i];
        if (needed in hash){
            return[hash[needed] + 1, i + 1]
        }
        hash[nums[i]] = i;
    }
}
