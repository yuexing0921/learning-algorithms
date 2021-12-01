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
//  * 1. 前序遍历-递归方式
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
 * 2. 前序遍历-迭代方式1-用栈来模拟（先进后出）
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (!root) {
    return [];
  }
  const res = [];
  const stack = [root];
  while (stack.length > 0) {
    root = stack.pop();
    res.push(root.val);
    // todo： 栈的特性，先进后出，因为是前序排列所以需要右边先进，左边后进，但是会先出
    root.right && stack.push(root.right);
    root.left && stack.push(root.left);
  }
  return res;
};
/**
 * 这个版本废弃
 * 2. 前序遍历-迭代方式2-用栈来模拟（先进后出）中左右,相比于之前的版本要多出一倍的性能
 * 测试case[5,4,6,1,2,7,8]
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const result = [];
  const stack = [];
  while (stack.length > 0 || root) {
    while (root) {
      result.push(root.val);
      stack.push(root);
      // 先把左边节点遍历完成
      root = root.left;
    }
    // 取出左边节点
    root = stack.pop();
    // 开始遍历右边节点
    root = root.right;
  }
  return result;
};
