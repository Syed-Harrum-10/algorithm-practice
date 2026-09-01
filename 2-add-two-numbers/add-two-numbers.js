/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function addTwoNumbers (l1, l2) {
    let result = 0;
    let carry = 0;
    let dummy = new ListNode();
    let current = dummy;

    while(l1 !== null || l2 !== null) {
        let val1 = l1 ? l1.val: 0; 
        let val2 = l2 ? l2.val: 0; 
        
        
        let sum = val1 + val2 + carry;
        
        result = sum % 10;
        current.next = new ListNode(result)
        current = current.next;
        carry = Math.floor(sum / 10);

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    if(carry > 0) {
        current.next = new ListNode(carry)
    }
    return dummy.next;
}