// https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// /**
//  * 1. 递归法 111. 二叉树的最小深度
//  * @param {TreeNode} root
//  * @return {number}
//  */
// var minDepth = function (root) {
//   if (!root) {
//     return 0;
//   }
//   if (!root.left && !root.right) {
//     return 1;
//   }
//   let leftDepth = minDepth(root.left);
//   let rightDepth = minDepth(root.right);
//   // 左有值，右无值
//   if (!root.right) {
//     return 1 + leftDepth;
//   }
//   // 右有值，左无值
//   if (!root.left) {
//     return 1 + rightDepth;
//   }
//   return Math.min(leftDepth, rightDepth) + 1;
// };

// /**
//  * 2. 递归法-极简 111. 二叉树的最小深度
//  * @param {TreeNode} root
//  * @return {number}
//  */
// var minDepth = function (root) {
//   if (!root) return 0;
//   // 到叶子节点 返回 1
//   if (!root.left && !root.right) return 1;
//   // 只有右节点时 递归右节点
//   if (!root.left) return 1 + minDepth(root.right);
//   // 只有左节点时 递归左节点
//   if (!root.right) return 1 + minDepth(root.left);
//   return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
// };

// /**
//  * 3. 迭代法-队列 111. 二叉树的最小深度
//  * @param {TreeNode} root
//  * @return {number}
//  */
// var minDepth = function (root) {
//   if (!root) return 0;

//   const queue = [root];
//   let depth = 1;

//   while (queue.length) {
//     let n = queue.length;
//     while (n--) {
//       const node = queue.shift();
//       if (!node.left && !node.right) {
//         return depth;
//       }
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     depth++;
//   }
// };

/**
 * 4. 迭代法-栈 111. 二叉树的最小深度
 * 
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;

  const stack = [root];
  let depth = 1;

  while (stack.length) {
    let n = stack.length;
    while (n--) {
      const node = stack.pop();
      if (!node.left && !node.right) {
        return depth;
      }
      // 如果是栈的话，为了保证是层序遍历，需要用unshift
      if (node.left) stack.unshift(node.left);
      if (node.right) stack.unshift(node.right);
    }
    depth++;
  }
};
