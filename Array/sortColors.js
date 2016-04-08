var sortColors = function(nums) {
    partitionLow(nums);
    partitionHigh(nums);
};

function partitionLow (nums) {
    var i = 0, j = nums.length - 1;
    while (i < j) {
        if (nums[i] === 0) {
            i++
        } else if (nums[j] === 0) {
            swap(nums, i, j);
            j--;
        } else {
            j--;
        }
    }
}

function partitionHigh (nums) {
    var i = 0, j = nums.length - 1;
    while (j > i) {
        if (nums[j] === 2) {
            j--;
        } else if (nums[i] === 2) {
            swap(nums, i, j);
            i++;
        } else {
            i++;
        }
    }
}

function swap (arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
