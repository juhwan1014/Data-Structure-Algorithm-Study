/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */


//Using Reculsive Function


// var isSymmetric = function(root) {
//     if (root == null ) return true;
    
//     return symmetryChecker(root.left, root.right); 
// };

// var symmetryChecker = function(left, right){
//     if(left == null && right == null) return true;
//     if(left == null || right == null) return false;
//     if(left.val !== right.val) return false;
    
//     return symmetryChecker(left.left, right.right) &&
//            symmetryChecker(left.right, right.left)
// }




var isSymmetric = function(root) {
//     if there is no root that means it is a symettric tree
    if(!root) return true
//     Start 2 queue one for the left banch and one for the right branch
    let q1 = [root.left], q2 = [root.right]
//     traverse through both branches, until they are both exhausted at the same time
    while (q1.length > 0 && q2.length > 0){
//         get current left and compare it to the right of each branch (this is how a mirror works)
        let node1 = q1.shift()
        let node2 = q2.shift()
//         if both are null at the same time, just move on
        if(!node1 && !node2) continue
//         if the current level is not symmetric (1 of them is null or they are not equal) return false
        if(!node1 || !node2 || node1.val !== node2.val) return false
//         to mentain comparing left to right (this is the tricky part, you have to push left and right & reverse for each branch)
        q1.push(node1.left)
        q2.push(node2.right)
        q1.push(node1.right)
        q2.push(node2.left)
    }
//     If both are exhausted at the same time and they are symmeteric return true
    return true
    
};