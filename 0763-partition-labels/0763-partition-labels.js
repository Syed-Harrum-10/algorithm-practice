/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function  (s) {
    let map = new Map();
    let start = 0;
    let end = 0;
    let result = [];

    for(let i = 0; i < s.length; i++) {
        map.set(s[i], i);
    }

    for(let j = 0; j < s.length; j++) {
        end = Math.max(end, map.get(s[j]));
        if(j === end) {
            result.push(end - start + 1);
            start = end + 1;
        }
    }
    return result;
}