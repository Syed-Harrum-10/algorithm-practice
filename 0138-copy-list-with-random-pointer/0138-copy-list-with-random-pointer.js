/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function copyRandomList (head) {
    let map = new Map();
    let original = head;

    while(head !== null) {

        if(!map.has(head)) {
            map.set(head, new Node(head.val))
        }

        head = head.next;
    }

    let current = original;

    while(current !== null) {
        map.get(current).next = current.next ? map.get(current.next) : null;
        map.get(current).random = current.random ? map.get(current.random) : null;

        current = current.next;
    }

    return map.get(original);

}
