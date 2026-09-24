/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function  (nums, n) {
    let map = new Map();


    for(let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    let maxFreq = Math.max(...map.values())

    let countOfMaxFreq = [...map.values()].filter(v => v === maxFreq).length;

    return Math.max(nums.length, (maxFreq - 1) * (n + 1) + countOfMaxFreq)
}