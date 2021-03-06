/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dummy = new ListNode()
    let cur
    dummy.next = head
    cur = dummy
    while(cur.next != null){
        if (cur.next.val == val) {
            cur.next = cur.next.next
        }else {
            cur = cur.next
        }
    }
    return dummy.next
};