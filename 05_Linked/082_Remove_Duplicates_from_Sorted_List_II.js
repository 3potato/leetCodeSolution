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
var deleteDuplicates = function(head) {
    let dummy = new ListNode()
    let pre
    let cur
    dummy.next = head
    pre = dummy
    cur = head
    while (cur != null){
        while (cur.next != null && cur.val == cur.next.val) {
            cur = cur.next
        }
        if (pre.next == cur){
            pre = pre.next
        }else {
            pre.next = cur.next
        }
        cur = cur.next
    }
    return dummy.next
};