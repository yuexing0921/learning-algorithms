// https://leetcode-cn.com/problems/sum-of-left-leaves/
//

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 404. 左叶子之和- 递归
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  if (!root) {
    return 0;
  }

  const dfs = (node, isLeft) => {
    if (!node) {
      return 0;
    }
    if (!node.left && !node.right) {
      if (isLeft) {
        return node.val;
      } else {
        return 0;
      }
    }
    return dfs(node.left, true) + dfs(node.right, false);
  };
  return dfs(root, false);
};

/**
 * 404. 左叶子之和- 层序遍历法
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  if (!root) {
    return 0;
  }
  let sum = 0;
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node.left && !node.left.left && !node.left.right) {
      sum += node.left.val;
    }
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  return sum;
};
