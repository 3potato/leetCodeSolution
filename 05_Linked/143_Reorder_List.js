/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

var reverse = function (head) {
    let prev = null
    while (head != null) {
        let next = head.next
        head.next = prev
        prev = head
        head = next
    }
    return prev
}
var merge = function (l1, l2) {

    let dummy = new ListNode()
    let cur = dummy
    while (l1 != null) {
        cur.next = l1
        cur = cur.next
        l1 = l1.next
        cur.next = l2
        cur = cur.next
        if(l2 != null){
            l2 = l2.next
        }
    }
    return dummy.next
}
var reorderList = function(head) {
    if(head == null || head.next == null){
        return head
    }
    let slow = head
    let fast = head
    let lr
    while (fast.next != null && fast.next.next != null){
        fast = fast.next.next
        slow = slow.next
    }
    lr = reverse(slow.next)
    slow.next = null
    merge(head, lr)
};

