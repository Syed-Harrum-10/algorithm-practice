/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let map = new Map();
  let sum = 0;
  let count = 0;
  
  // Base case: a prefix sum of 0 has occurred once
  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    // If (sum - k) exists, add how many times we've seen it
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }

    // Record the current prefix sum frequency
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
}
