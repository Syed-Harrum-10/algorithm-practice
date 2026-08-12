/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(head === null) return 0;

    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }

    let current = slow.next;
    let previous = null;
    let temp = null;

    while(current !== null) {
        temp = current.next;
        current.next = previous;
        previous = current;
        current = temp
    }
    slow.next = null

    let first = head;
    let second = previous;

    while (second !== null) {
        let temp1 = first.next;
        let temp2 = second.next;

        first.next = second;
        second.next = temp1;

        first = temp1;
        second = temp2;
    }

};