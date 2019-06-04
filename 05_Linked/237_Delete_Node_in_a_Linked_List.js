/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val
    node.next = node.next.next
};

var deleteNode = function(node) {
    let cur = node
    while (cur != null){
        cur.val = cur.next.val
        if(cur.next.next == null){
            cur.next = null
            break
        }else{
            cur = cur.next
        }
    }
};

var deleteNode = function(node) {
    let cur = new ListNode()
    cur.next = node
    while (cur.next.next != null){
        cur.next.val = cur.next.next.val
        cur = cur.next
    }
    cur.next = null
};