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
var insertionSortList = function(head) {
    let dummy = new ListNode()
    let prev = dummy
    let cur = head
    while (cur != null){
        while (prev.next != null && cur.val > prev.next.val){
            prev = prev.next
        }
        let next = cur.next
        cur.next = prev.next
        prev.next = cur
        cur = next
        prev = dummy
    }
    return dummy.next
};