var containsNearbyDuplicate = function(nums, k) {
    var indices = {};
    var difference;

    for (var i = 0; i < nums.length; i++) {

        //Compare values from distinct indices of nums
        if (nums[i] in indices && indices[nums[i]] !== i) {

            //Get difference between indices
            difference = Math.abs(indices[nums[i]] - i);

            //Find out if difference is less than or equal to k
            if (difference <= k) {
                return true;
            }
        }

        //Set value as key, index as value
        indices[nums[i]] = i;
    }

    return false;

};
