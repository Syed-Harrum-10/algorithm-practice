/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = nums[0];
    let currentSum = 0;

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        max = Math.max(max, currentSum);
        if (currentSum < 0) currentSum = 0;
    }

    return max
}