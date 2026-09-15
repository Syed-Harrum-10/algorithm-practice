/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function  (nums) {
    let result = [];

    function helper (start, current) {
        result.push([...current]);
        for(let i = start; i < nums.length; i++) {
            current.push(nums[i]);
            helper(i + 1, current);
            current.pop(current);
        }
    }

    helper(0, []);
    return result;
}
