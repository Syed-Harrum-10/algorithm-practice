/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function findDuplicate(num) {
    let slow = num[0];
    let fast = num[0];

    while (true) {
        slow = num[slow];
        fast = num[num[fast]];

        if (slow === fast) {
            slow = num[0];
           while(slow !== fast) {
            slow = num[slow];
            fast = num[fast];
           }
           return slow
        }

    }
    return false;

}