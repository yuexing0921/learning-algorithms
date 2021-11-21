// https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// /**
//  * 递归方式
//  * @param {TreeNode} root
//  * @return {number[]}
//  */
// var preorderTraversal = function (root) {
//   const result = [];
//   const dfs = function (node) {
//     if (!node) {
//       return;
//     }
//     result.push(node.val);
//     dfs(node.left);
//     dfs(node.right);
//   };
//   dfs(root);
//   return result;
// };
/**
 * 迭代方式-用栈来模拟（先进后出）
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (!root) {
    return [];
  }
  const result = [];
  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.val);
    // 栈的特性，先进后出，因为是前序排列所以需要右边先进，左边后进，但是会先出
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }
  return result;
};
