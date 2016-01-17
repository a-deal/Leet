var majorityElement = function(nums) {
    var occurrences = {}, results = [];
    for (var i = 0; i< nums.length; i++) {
        occurrences[nums[i]] = nums[i] in occurrences ? occurrences[nums[i]] + 1 : 1;
    }
    var largest = 0, count = 0;
    for (var num in occurrences) {
        if (occurrences[num] > count){
            count = occurrences[num];
            largest = +num;
        }
    }
    return largest;
};