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
    let prev = head
    if (head == null || head.next == null) return head

    while (prev.next != null){
        if (prev.val == prev.next.val){
            prev.next = prev.next.next
        }else {
            prev = prev.next
        }
    }

    return head
};