/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let cur = head
    let count = 0
    let prev = null

    while(count != k && cur != null){
        cur = cur.next
        count++
    }
    if (k == count){
        cur = reverseKGroup(cur, k)
        while (count-- > 0){
            let next = head.next
            head.next = cur
            cur = head
            head = next
        }
        head = cur
    }
    return head
};