/*
You are a professional robber planning to rob houses along a street.
Each house has a certain amount of money stashed, the only constraint
stopping you from robbing each of them is that adjacent houses have
security system connected and it will automatically contact the police
if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house,
determine the maximum amount of money you can rob tonight without alerting the police.

Input  : <array> nums
Output : <int> nums

function rob ( nums, currentLoot, maxLoot )
  currentLoot = currentLoot || 0, max = max || 0;
  if (currentLoot > maxLoot) {
    maxLoot = current;
  } else {
    for nums[i] in nums;
      let nextValidHouse = nums[i + 2], currentHouse = nums[i];
      if (nextValidHouse)
        rob(nums.slice(i + 2), currentLoot + currentHouse, maxLoot)
  }
  return maxLoot
}

*/

/*
function rob (nums, current, next)
  current = current || 0;
  if (nums[current]) {
    var currentHouse = nums[current] + rob(nums, current + 2, current + 3 );
  }
  if (nums[next]) {
    var nextHouse = nums[next] + rob(nums, next + 2, next + 3);
  }

  return currentHouse > nextHouse ? currentHouse : nextHouse

*/
function rob (nums, current) {
  current = current || 0;
  var currentHouse = 0, nextHouse = 0, next;

  console.log('current is', current);
  console.log('');

  if (nums[current]) {
    var defined = areDefined(nums[current + 2], nums[current + 3]);

    if (defined === 2) {
      next = current + (nums[current + 2] > nums[current + 3] ? 2 : 3);
    } else if (defined === 1) {
      next = current + 2;
    }

    if (next) {
      currentHouse = nums[current] + rob(nums, next);
    } else {
      currentHouse = nums[current]
    }
  }

  next = undefined;

  if (nums[current + 1]) {
    var defined = areDefined(nums[current+3], nums[current + 4]);
    if (defined === 2) {
      next = current + (nums[current + 3] > nums[current + 4] ? 3 : 4);
    } else if (defined === 1) {
      next = current + 3;
    }

    if (next) {
      currentHouse = nums[current + 1] + rob(nums, next);
    } else {
      current = nums[current + 1]
    }
  }

  return currentHouse > nextHouse ? currentHouse : nextHouse
}

function areDefined (a, b) {
  if (typeof b === 'number') {
    return 2;
  } else if (typeof a !== 'number') {
    return 1;
  } else {
    return 0;
  }
}



console.log(rob([1,2,3])); // 4 (1 + 3)
// console.log(rob([1])); // 1
// console.log(rob([1,2,3,4,5])); // 9
// console.log(rob([7,6,5,4,3,2,1]));
// console.log(rob([183,219,57,193,94,233,202,154,65,240,97,234,100,249,186,66,90,238,168,128,177,235,50,81,185,165,217,207,88,80,112,78,135,62,228,247,211])); // 3365
// console.log(rob([226,174,214,16,218,48,153,131,128,17,157,142,88,43,37,157,43,221,191,68,206,23,225,82,54,118,111,46,80,49,245,63,25,194,72,80,143,55,209,18,55,122,65,66,177,101,63,201,172,130,103,225,142,46,86,185,62,138,212,192,125,77,223,188,99,228,90,25,193,211,84,239,119,234,85,83,123,120,131,203,219,10,82,35,120,180,249,106,37,169,225,54,103,55,166,124]));
/*
"use strict";
function rob (nums, current, next) {
  current = current || 0, next = next || 1;
  var currentHouse = 0, nextHouse = 0;


  if (nums[current]) {
    currentHouse = nums[current] + rob(nums, current + 2, current + 3 );
  }
  if (nums[next]) {
    nextHouse = nums[next] + rob(nums, next + 2, next + 3);
  }

  return currentHouse > nextHouse ? currentHouse : nextHouse
}

*/
