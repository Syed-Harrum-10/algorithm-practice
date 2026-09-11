/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let result = Math.max(...nums);
    let curMin = 1;
    let curMax = 1;

    for (let i = 0; i < nums.length; i++) {
        let temp = curMax * nums[i];
        curMax = Math.max(nums[i], temp, curMin * nums[i]);
        curMin = Math.min(nums[i], temp, curMin * nums[i]);
        result = Math.max(result, curMax);
    }
    return result;
}