/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    let max = 0;
    let min = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            min++
            max++
        }
        if (s[i] === ')') {
            min--
            max--
        }
        if (s[i] === '*') {
            min--
            max++
        }

        min = Math.max(0, min);

        if(max < 0) return false
    }
    return min === 0;
}