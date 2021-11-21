// https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * 1. DFS 递归法： N 叉树的最大深度
 * @param {Node|null} root
 * @return {number}
 */
// var maxDepth = function (root) {
//   if (!root) {
//     return 0;
//   }
//   let depth = 0;
//   root.children.forEach((child) => {
//     depth = Math.max(depth, maxDepth(child));
//   });
//   return depth + 1;
// };

/**
 * 2. BFS ： N 叉树的最大深度
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let depth = 0;
  const queue = [root];
  while (queue.length) {
    let n = queue.length;
    while (n--) {
      const node = queue.shift();
      node.children.forEach((child) => {
        queue.push(child);
      });
    }
    depth++;
  }
  return depth;
};
