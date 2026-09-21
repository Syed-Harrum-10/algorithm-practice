/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let result = [];

    function helper(start, current) {
        if (start === s.length) {
            result.push([...current]);
            return;
        }

        for (let end = start; end < s.length; end++) {
            let left = start;
            let right = end;
            let palindrome = true;

            while (left < right) {
                if (s[left] !== s[right]) {
                    palindrome = false;
                    break;
                }
                left++;
                right--;
            }

            if (palindrome) {
                current.push(s.slice(start, end + 1));
                helper(end + 1, current);
                current.pop();
            }
        }
    }

    helper(0, []);
    return result;
};