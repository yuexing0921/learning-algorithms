// https://leetcode-cn.com/problems/check-completeness-of-a-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 958. 判断是否完全二叉树 - bfs层序遍历 - 比较完美
 * [1,2,3,5,null,7,8]
 * [1,2,3,null,null,7,8]
 * 一个树如果不是完全二叉树，满足下面两个条件
 * 1. 左边为空，右边不为空
 * 2.1 左边有值，右边无值，但是接下来的层序排列又有值了，比如[1,2,3,5,null,7,8]
 * 2.2  当左二叉树无叶子节点了，但是右二叉树还有叶子节点，比如[1,2,3,null,null,7,8]
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function (root) {
  if (!root) return true;
  const queue = [root];
  // 是否遇到过左右两个孩子不双全的节点, 代表一个事件发生了
  let leaf = false,
    left,
    right;
  while (queue.length) {
    const node = queue.shift();
    left = node.left;
    right = node.right;
    if (!left && right) {
      // 1. 左边为空，右边不为空
      return false;
    }
    if (leaf && (left || right)) {
      // 如果已经发生了叶子节点为空的情况，那么后面这一层应该都为空，但是如有其他叶子节点，肯定是错误的
      return false;
    }

    left && queue.push(left);
    right && queue.push(right);
    if (left && !right) {
      // 2.1 左边为空，右边不为空
      leaf = true;
    }
    if (!left && !right) {
      // 2.2 发生了左右都没有值的情况
      leaf = true;
    }
  }
  return true;
};
