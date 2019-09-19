/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

//this is the right answer
//
var rangeSumBST = function(root, L, R) {
  // base case
  // the root has a value. it is null return 0 that is the sum.
  if (root == null) return 0;
  // if the value of the root is greater than the right
  if (root.val > R) return rangeSumBST(root.left, L, R);
  else if (root.val < L) return rangeSumBST(root.right, L, R);
  else
    return (
      root.val + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R)
    );
};

console.log(rangeSumBST([10, 5, 15, 3, 7, null, 18], 7, 15));
