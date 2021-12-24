/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = (head) => {
    let previous = null
    let next = null
    
   while(head){
        next = head.next
        head.next = previous
       //head = [1] -> 1-null
        previous = head  
        head = next
         }
    
    return previous
}
























// var reverseList = function(head) {
//     let previous = null
//     let next = null
 
//   while(head){
//       next = head.next
//       head.next = previous
//       previous = head
//       head = next
//       // console.log(JSON.stringify(next))  
//   }
    
//     return previous
  
    
// };


// var reverseList = function(head) {
//     let [prev, cur] = [null, head]
//     while(cur) {
       
//    [cur.next, prev, cur] = [prev, cur, cur.next] 
       
    
        
//     }
//     return prev
// }
