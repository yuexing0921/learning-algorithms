// https://leetcode-cn.com/problems/validate-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 98. 验证二叉搜索树 - dfs
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  const dst = function (node, min, max) {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;
    return dst(node.left, min, node.val) && dst(node.right, node.val, max);
  };
  return dst(root, -Infinity, Infinity);
};

/**
 * 98. 验证二叉搜索树 - dfs-中序遍历，
 * 二叉搜索树是一颗升序的树，利用左中右遍历进行遍历
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let prev = -Infinity;
  const dst = function (root) {
    if (!root) return true;
    if (!dst(root.left)) return false;
    if (root.val <= prev) return false;
    prev = root.val;
    return dst(root.right);
  };
  return dst(root);
};

/**
 * 98. 验证二叉搜索树 - bfs-中序遍历-栈，
 * 二叉搜索树是一颗升序的树，利用左中右遍历进行遍历
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (!root) return true;
  let prev = -Infinity;
  const stack = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (root.val <= prev) {
      return false;
    }
    prev = root.val;
    root = root.right;
  }

  return true;
};

/**
 * 98. 验证二叉搜索树 - bfs-中序遍历-队列，
 * 二叉搜索树是一颗升序的树，利用左中右遍历进行遍历
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (!root) return true;
  let prev = -Infinity;
  const queue = [];
  while (root || stack.length) {
    while (root) {
      queue.unshift(root);
      root = root.left;
    }
    root = queue.shift();
    if (root.val <= prev) {
      return false;
    }
    prev = root.val;
    root = root.right;
  }

  return true;
};
