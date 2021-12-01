// https://leetcode-cn.com/problems/binary-tree-inorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// /**
//  * 1. 中序遍历-递归解法
//  * @param {TreeNode} root
//  * @return {number[]}
//  */
// var inorderTraversal = function (root) {
//   const result = [];
//   const dfs = function (node) {
//     if (!node) {
//       return;
//     }
//     // 先把左边节点遍历到底
//     dfs(node.left);
//     result.push(node.val);
//     dfs(node.right);
//   };
//   dfs(root);
//   return result;
// };

/**
 * 2. 中序遍历-迭代法，左中右 关键是入栈和出栈的顺序
 * 测试case[5,4,6,1,2,7,8]
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];
  const stack = [];
  while (root || stack.length > 0) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    result.push(root.val);
    root = root.right;
  }
  return result;
};
/**
 * 2. 中序遍历-迭代法，左中右 关键是入栈和出栈的顺序
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];
  const stack = [];
  while (root || stack.length > 0) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      result.push(root.val);
      root = root.right;
    }
  }
  return result;
};
