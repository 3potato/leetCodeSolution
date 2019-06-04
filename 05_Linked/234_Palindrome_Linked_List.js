/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
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

var isPalindrome = function(head) {
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

    while (lr != null){
        if (head.val != lr.val){
            return false
        }
        head = head.next
        lr = lr.next
    }
    return true
};