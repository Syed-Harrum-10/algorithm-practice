/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function  (candidates, targets) {
    let result = [];

    function helper (start, current, remaining) {
        if(remaining === 0){
            result.push([...current]);
        }
        if(remaining < 0) {
            return;
        }

        for(let i = start; i < candidates.length; i ++) {

                current.push(candidates[i]);
                helper(i, current, remaining - candidates[i])
                current.pop(current);

        }
    }
    helper(0, [], targets)
    return result;
}