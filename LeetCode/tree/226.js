// https://leetcode-cn.com/problems/invert-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// /**
//  * 226. 翻转二叉树 - 递归法
//  * 1. 交换左右子树
//  * 2. 递归交换各自树下的左右子树
//  * @param {TreeNode} root
//  * @return {TreeNode}
//  */
//  var invertTree = function(root) {
//     if(!root){
//         return null
//     }
//     const temp = root.left
//     root.left = root.right
//     root.right = temp
//     root.left && invertTree(root.left)
//     root.right && invertTree(root.right)
//     return root
// };

/**
 * 226. 翻转二叉树 - 迭代法-广度优先遍历
 * 1. 利用队列层层交换左右子树
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) {
    return null;
  }
  const queue = [root];
  while (queue.length) {
    let n = queue.length;
    while (n--) {
      const temp = queue.shift();
      const left = temp.left;
      temp.left = temp.right;
      temp.right = left;
      temp.left && queue.push(temp.left);
      temp.right && queue.push(temp.right);
    }
  }
  return root;
};
