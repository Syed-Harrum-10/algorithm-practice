/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function  (n) {
    let result = [];
    function helper(current, open, close) {
        if(current.length === n * 2) {
            result.push(current);
        }
        if(open < n) {
            helper(current + '(', open + 1, close);
        }
        if(close < open) {
            helper(current + ')', open, close + 1);
        }
    }
    helper('', 0, 0);

    return result;
}