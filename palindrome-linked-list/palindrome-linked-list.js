/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 1-2-3-4-null
// f:3-4-null       null
// s:2-3-4-null    3-4-null
// stack:1,2

// 1-2-3-4-5-null
// f:3-4-5-null      5-null
// s:2-3-4-5-null  3-4-5-null 4-5-null
// stack:1,2

// var isPalindrome = function(head) {
//     let slow = head;
//     let fast = head;
//     const stack = [];
//     while(fast){
//           if(!fast.next){
//               slow = slow.next
//               break;
//           }
//         stack.push(slow.val)
//         slow = slow.next
//         fast = fast.next.next;
//           }
    
//     while(slow){
//           if(stack.pop() != slow.val) return false;
//         slow = slow.next
//           }
    
//     return true
// }




var findMid = (head) => {
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

var reverse = (head) => {
    let prev = null
    let cur = head 
    while(cur){
        const next = cur.next
        cur.next = prev
        prev = cur
        cur = next 
    }
    
    // let cur = head
    // while(cur){
    // [cur.next, prev, cur] = [prev, cur, cur.next]
    // }
    
    
    
    // while(head){
    //       let next = head.next
    //       head.next = prev
    //       prev = head
    //       head = next
    //       }
    
    
    return prev
}

var compare = (list1, list2) => {
    while(list1 && list2){
          if(list1.val !== list2.val) return false
        list1 = list1.next
        list2 = list2.next
          }
    return true
}

var isPalindrome = (head) => {
    const mid = findMid(head);
    const tail = reverse(mid);
    return compare(head, tail)
}


// var isPalindrome = function(head) {
//    let first = '';
//     let second = '';
//     while (head) {
//         console.log("히릿")
//         first = first + head.val;
//         console.log(first)
//         second = head.val + second;
//         console.log(second)
//         head = head.next;
//     }
//     return first === second;
// };