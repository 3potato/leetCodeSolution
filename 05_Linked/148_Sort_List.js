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
var sortList = function(head) {
    let prev
    let slow = head
    let fast = head
    let l1
    let l2
    if(head == null || head.next == null){
        return head
    }
    while (fast != null && fast.next != null) {
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }
    prev.next = null
    l1 = sortList(head)
    l2 = sortList(slow)
    return merge(l1, l2)
};

var merge = function(l1, l2){
    let dummy = new ListNode()
    let cur = dummy
    while (l1 != null || l2 != null){
        if (l2 == null || l1 != null && l1.val <= l2.val){
            cur.next = l1
            l1 = l1.next
        }else if (l1 == null || l1.val > l2.val){
            cur.next = l2
            l2 = l2.next
        }
        cur = cur.next
    }
    return dummy.next
}