// https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 测试case[5,4,6,1,2,7,8]
 * DFS-104. 二叉树的最大深度
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  return 1 + Math.max(leftDepth, rightDepth);
};

/**
 * BFS-104. 二叉树的最大深度
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return null;
  let depth = 0,
    queue = [root];
  while (queue.length) {
    let n = queue.length;
    while (n--) {
      root = queue.shift();
      root.left && queue.push(root.left);
      root.right && queue.push(root.right);
    }
    // 当前层所有节点已经出栈，说明有下一层节点，depth+1
    depth++;
  }
  return depth;
};
