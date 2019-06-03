/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    let stack1 = []
    let stack2 = []
    let sum = 0
    let dummy = new ListNode()
    while (l1 != null){
        stack1.push(l1.val)
        l1 = l1.next
    }

    while (l2 != null){
        stack2.push(l2.val)
        l2 = l2.next
    }


    while (stack1.length != 0 || stack2.length != 0 || sum != 0 ){

        if (stack1.length != 0){
            sum += stack1.pop()
        }
        if (stack2.length != 0){
            sum += stack2.pop()
        }

        let node = new ListNode(sum%10)
        node.next = dummy.next
        dummy.next = node
        sum = Math.floor(sum/10)

    }
    return dummy.next

};