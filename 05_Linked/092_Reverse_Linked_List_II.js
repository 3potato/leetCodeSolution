/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

var reverseBetween = function(head, m, n) {
    let dummy = new ListNode()
    dummy.next = head

    let prev = dummy

    for (var i = 0; i < m - 1; i++) {
        prev = prev.next
    }
    let start = prev.next
    let then = start.next
    for (var i = 0; i < n - m; i++) {
        start.next = then.next
        then.next = prev.next
        prev.next = then
        then = start.next
    }

    return dummy.next

};