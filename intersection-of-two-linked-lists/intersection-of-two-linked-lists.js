/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
      if(!headA || !headB)return null
    let a = headA, b = headB
    while(a !== b){
        a = a.next
        b = b.next
        if(!a && !b)return a
        if(!a)a = headB
        if(!b)b = headA
    }
    return a
};