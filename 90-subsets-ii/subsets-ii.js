/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b);

    let result = [];

    function helper(start, current) {
        result.push([...current]);

        for (let i = start; i < nums.length; i++) {
            if(i > start && nums[i] === nums[i-1]) continue;
            current.push(nums[i]);
            helper(i+1, current);
            current.pop();
        }
    }
    helper(0, []);

    return result;
}