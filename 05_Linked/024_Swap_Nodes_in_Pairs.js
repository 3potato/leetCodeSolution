/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let dummy = new ListNode()
    let cur
    dummy.next = head
    cur = dummy
    while (cur.next != null && cur.next.next != null){
        let first = cur.next
        let sec = cur.next.next
        first.next = sec.next
        sec.next = first
        cur.next = sec
        cur = cur.next.next
    }
    return dummy.next
};