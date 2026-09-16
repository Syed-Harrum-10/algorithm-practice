/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    let result = [];

    function helper(start, current, remaining) {
        if (remaining === 0) {
            result.push([...current]);
        }
        if (remaining < 0) {
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            current.push(candidates[i]);
            helper(i + 1, current, remaining - candidates[i])
            current.pop(current);
        }
    }
    helper(0, [], target);
    return result;
}