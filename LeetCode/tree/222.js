// https://leetcode-cn.com/problems/count-complete-tree-nodes/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// /**
//  * 222. 完全二叉树的节点个数
//  * 方法1 递归方式
//  * @param {TreeNode} root
//  * @return {number}
//  */
// var countNodes = function (root) {
//   const getNodeSum = function (node) {
//     if (!node) {
//       return 0;
//     }

//     // 获取对应的node num
//     const leftNum = getNodeSum(node.left);
//     const rightNum = getNodeSum(node.right);
//     return leftNum + rightNum + 1;
//   };
//   return getNodeSum(root);
// };

/**
 * 222. 完全二叉树的节点个数
 * 方法2 迭代方式-前序遍历
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  const stack = [];
  let num = 0;
  while (root || stack.length) {
    while (root) {
      // console.log(root)
      num++;
      stack.push(root);
      root = root.left;
    }
    // 把右节点取出
    root = stack.pop();
    root = root.right;
  }
  return num;
};
/**
 * 222. 完全二叉树的节点个数
 * 方法3 迭代方式-层序遍历
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  let num = 0;
  if (!root) {
    return num;
  }
  const queue = [root];
  while (queue.length) {
    let len = queue.length;
    while (len--) {
      num++;
      const node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return num;
};
