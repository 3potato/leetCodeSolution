/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let dummyL = new ListNode
    let dummyM = new ListNode
    let curL = dummyL
    let curM =dummyM

    while (head) {
        if (head.val < x) {
            curL.next = head
            curL = curL.next
        }else {
            curM.next = head
            curM = curM.next
        }
        head = head.next
    }
    curM.next = null
    curL.next = dummyM.next
    return dummyL.next

};