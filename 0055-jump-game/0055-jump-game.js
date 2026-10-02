/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function  (num) {
    let farthest = 0;
    for(let i = 0; i < num.length; i++) {
        if(i > farthest) {
            return false
        }
        farthest = Math.max(farthest, i + num[i]);


    }
    return true;
}