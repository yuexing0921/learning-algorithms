// https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 530. 二叉搜索树的最小绝对差 - dfs 中序遍历
 * 利用二插搜索树特性（左边 < 中间 < 右边）
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let res = Infinity;
  let prevNode = null;

  const inorder = function (node) {
    if (!node) return;
    inorder(node.left);
    if (prevNode) res = Math.min(res, node.val - prevNode.val);
    prevNode = node;
    inorder(node.right);
  };
  inorder(root);
  return res;
};

/**
 * 530. 二叉搜索树的最小绝对差 - bfs 中序遍历
 * 利用二插搜索树特性（左边 < 中间 < 右边）
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let res = Infinity;
  let prevNode = null;
  const stack = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (prevNode) res = Math.min(res, root.val - prevNode.val);
    prevNode = root;
    root = root.right;
  }

  return res;
};
