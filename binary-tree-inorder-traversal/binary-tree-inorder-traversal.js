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
 * @return {number[]}
 */


//  Iterative In-order Traverse
//  Time Complexity: O(N)
//  Space Complexity: O(H)


var inorderTraversal = function(root) {
     const stack = [];
  const res = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      res.push(root.val);
      root = root.right;
    }
  }

  return res;
};




// Recursive In-order Traverse
// Time Complexity: O(N)
// Space Complexity: O(H)

const inorderTraversal = (root) => {
  const res = [];
  traverse(root);
  return res;
  
  function traverse(node) {
      if (!node) return;
      traverse(node.left);
      res.push(node.val);
      traverse(node.right);
  }
};


// Time Complexity:
// an spread syntax takes linear time and it takes T(n/2) in this implementation
// average: O(N log N)
// worst: O(N^2) unbalanced tree
// Space Complexity: O(H)

const inorderTraversal = (root) => {
  if (!root) return [];
  const res = [];
  res.push(...inorderTraversal(root.left));
  res.push(root.val);
  res.push(...inorderTraversal(root.right));
  return res;
};