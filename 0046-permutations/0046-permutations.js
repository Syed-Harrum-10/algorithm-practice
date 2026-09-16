/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function  (nums) {
    let result = [];

    function helper (current) {
        if(current.length === nums.length) {
            result.push([...current]);
        }

        for(let i = 0; i < nums.length; i++) {
            if(current.includes(nums[i])) continue;
            current.push(nums[i]);
            helper(current);
            current.pop();
        }
    }
    helper([]);
    return result;
}