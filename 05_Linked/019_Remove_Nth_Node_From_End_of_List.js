/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode()
    let slow = dummy
    let fast = dummy
    dummy.next = head
    while (n-- > 0){
        fast = fast.next
    }
    while (fast.next != null){
        slow = slow.next
        fast = fast.next
    }
    slow.next = slow.next.next
    return dummy.next
};