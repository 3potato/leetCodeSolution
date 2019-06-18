/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length == 0) {
        return null
    }
    return mergeList(lists, 0, lists.length - 1)
};

var mergeList = function(lists, l, r) {
    if( l == r)  return lists[l]

    let mid = l + Math.floor((r - l)/2)
    let l1 = mergeList(lists, l, mid)
    let l2 = mergeList(lists, mid + 1, r)

    return merge(l1, l2)
};

// traverse
var merge = function(l1, l2) {
    let dummy = new ListNode()
    let cur = dummy

    while ( l1 != null || l2 != null){
        if (l2 == null || (l1 != null && l1.val <= l2.val)){
            cur.next = l1
            l1 = l1.next
        }else if (l1 == null || l1.val > l2.val){
            cur.next = l2
            l2 = l2.next
        }
        cur = cur.next
    }

    return dummy.next
};

// recursion
var merge = function(l1, l2) {
    if (l1 == null) return l2
    if (l2 == null) return l1

    if (l1.val <= l2.val){
        l1.next = merge(l1.next, l2)
        return l1
    }else {
        l2.next = merge(l1, l2.next)
        return l2
    }
};

